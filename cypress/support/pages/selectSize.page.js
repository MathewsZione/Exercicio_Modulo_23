export const selectSizePage = {
    get size() { return cy.get('.button-variable-item-M') },
    selectSize() { this.size.should('be.visible').click().click() }
}