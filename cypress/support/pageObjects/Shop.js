class shop {

    elements = {
        addToBasketBtn: () => cy.get('a.btn.addItem'),
        priceText: () => cy.get('small.text-muted'),
        basketIcon: () => cy.get('a.nav-link').contains(' Basket'),
    };
};

export default new shop;
