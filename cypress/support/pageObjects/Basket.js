class basket {

    elements = {
        totalGBPValue: () => cy.get('strong'),
        standardShippingOption: () => cy.get('.custom-radio label').eq(1),
        firstNameInput: () => cy.get('#name').eq(0),
        lastNameInput: () => cy.get('[id="name"]').eq(1),
        emailInput: () => cy.get('#email'),
        addressInput: () => cy.get('#address'),
        optionalAddressInput: () => cy.get('#address2'),
        countryDropdownMenu: () => cy.get('#country'),
        cityDropdownMenu: () => cy.get('#city'),
        zipInput: () => cy.get('#zip'), 
        nameOnCardInput: () => cy.get('#cc-name'),
        creditCardNumberInput: () => cy.get('#cc-number'), 
        expirationInput: () => cy.get('#cc-expiration'),
        cvvInput: () => cy.get('#cc-cvv'),
        continueToCheckoutBtn: () => cy.contains('Continue to checkout')
    };

    fillCheckoutForm({
        firstName: firstName = 'John', lastName: lastName = 'Fox', email: email = 'john@example.com', address: address = '123 Main St',
        optionalAddress: optionalAddress = 'apartmet 7', country: country = 'United Kingdom', city: city = 'Bristol',
        zip: zip = '12345', nameOnCard: nameOnCard = 'John Fox', creditCardNumber: creditCardNumber = '4999999999990011',
        expiration: expiration = '22/02/2027', cvv: cvv = '222'
    }) {
        this.elements.firstNameInput().type(firstName);
        this.elements.lastNameInput().type(lastName);
        this.elements.emailInput().type(email);
        this.elements.addressInput().type(address);
        this.elements.optionalAddressInput().type(optionalAddress);
        this.elements.countryDropdownMenu().select(country);
        this.elements.cityDropdownMenu().select(city); 
        this.elements.zipInput().type(zip); 
        this.elements.nameOnCardInput().type(nameOnCard); 
        this.elements.creditCardNumberInput().type(creditCardNumber); 
        this.elements.expirationInput().type(expiration); 
        this.elements.cvvInput().type(cvv);
    
        // Click on the checkout button
        this.elements.continueToCheckoutBtn().click();
    };
};

export default new basket;
