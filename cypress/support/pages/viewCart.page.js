export const viewCartPage = {
    get buttonViewCart() {return cy.get('.woocommerce-message > .button')},
    clickCart() {this.buttonViewCart.should('be.visible').click()},

    get removeItem() {return cy.get(':nth-child(1) > .product-remove > .remove > .fa')},
    removeIcon() {this.removeItem.click()},

    get cartEmpty() {return cy.get('.woocommerce-message')},
    assert() {this.cartEmpty.should('be.visible','contain', 'removido')}
}