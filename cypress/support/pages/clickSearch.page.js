///<reference types = "cypress"/>

export const clickSearch = {
    get magnifier() {return cy.get ('.site-header .search-form > button')},
    searchMagnifier() {this.magnifier.click()}
}