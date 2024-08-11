import { basket, shop } from '../support/pageObjects/index';

describe('Sweet Shop E2E Tests', () => {
    before(() => {
        cy.visit('/');
    });
  
    it('Add products to the basket and verify basket contents', () => {
      let totalPrice = 0;
      
      for (let i = 0; i <= 3; i++) {
        // add 4 items to a basket
        shop.elements.addToBasketBtn().eq([i]).click();

        // count the total price
        shop.elements.priceText().eq([i]).invoke('text').then((text) => {
          const totalPriceText = text.replace('£', '').trim();
          const totalPriceNumber = parseFloat(totalPriceText);
         
          totalPrice += totalPriceNumber;
        });
      }

      // navigate to basket
      shop.elements.basketIcon().click();

      // check the total price in GBP
      basket.elements.totalGBPValue().should('be.visible');
      basket.elements.totalGBPValue().invoke('text').then((text) => {
        const totalPriceText = text.replace('£', '').trim();
        const totalPriceInBasket = parseFloat(totalPriceText);

        expect(totalPrice).to.equal(totalPriceInBasket);
      });

      // there is error on site when we check option Standard Shipping: : £NaN for the total price in GBP
      // what should we do 
      // 1) check option Standard Shipping
      // 2) manually add 1.99 to the total price in GBP
      // 3) get new value the total price in GBP in Basket
      // 4) compare these two values from 2 and 3 step
    
      // Fill in details on the checkout form (parameters can be changed)
      basket.fillCheckoutForm({ firstName: 'Amanda', lastName: 'Green', creditCardNumber: '4111111111111111' });

      // cy.url().should('include', '/confirmation'); // Example URL, adjust as needed
      // cy.get('[data-test="confirmation-message"]').should('contain', 'Thank you for your purchase'); // Example message
    });
});
  