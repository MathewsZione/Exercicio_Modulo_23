export const selectColorPage = {
 get color() {return cy.get('.button-variable-item-Brown')},
 selectColor() {this.color.should('be.visible').click().click()}
}