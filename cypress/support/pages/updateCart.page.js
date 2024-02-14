export const updateCartPage = {
    get quantity() {return cy.get('.quantity > .input-text')},
    inputQuantity() {this.quantity.clear().type(3)},

    get pullRightBTN() {return cy.get('.pull-right > .btn')},
    updateCart() {this.pullRightBTN.click()},

    get messagesucess() {return cy.get('.woocommerce-message')},
    updateAssert() {this.messagesucess.should('contain', 'Carrinho atualizado')}
}