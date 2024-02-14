import { loginPage,clickSearch, productSearchPage, selectSizePage, selectColorPage, clickBuyPage,viewCartPage } from "../support/pages";
const login = require ('../fixtures/login.json')

describe('Remover item do carrinho', () => {
    beforeEach(() => {
        cy.visit('/minha-conta/')
        loginPage.login(login.email, login.senha)
      });

      
  it.only('Deve remover produto do carrinho com sucesso', () =>{
    clickSearch.searchMagnifier()
    productSearchPage.search('Daily')
    productSearchPage.productList.first().click().should('have.attr', 'title', 'Aero Daily Fitness Tee')
    cy.intercept({
        method: 'POST',
        url: '/product/aero-daily-fitness-tee/*',
    }, req => {
        req.reply(
            {
                statusCode: 200,
                body: `${req.query.callback}(
                ${JSON.stringify()}
                )`
            }
        )

    })
    selectSizePage.selectSize()
    selectColorPage.selectColor()
    clickBuyPage.buttonbuy()
    cy.intercept({
        method: 'GET',
        url: '/?wc-ajax=get_refreshed_fragments*',
        query: {
            term: 'remove this item'
        }
    }, req => {
        req.reply(
            {
                statusCode: 200,
                body: `${req.query.callback}(
                    ${JSON.stringify()}
                )`
            }
        )
    }),
   viewCartPage.clickCart()
   viewCartPage.removeIcon()
   viewCartPage.assert()
  })

});