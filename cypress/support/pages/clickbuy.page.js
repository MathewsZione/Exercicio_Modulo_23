export const clickBuyPage = {
    get clickbuy() {return cy.get('.single_add_to_cart_button')},
    buttonbuy() {this.clickbuy.should('be.visible').click()}
}