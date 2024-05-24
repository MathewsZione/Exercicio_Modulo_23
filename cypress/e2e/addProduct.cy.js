///<reference types ="cypress"/>


import { should } from "chai";
import { loginPage,clickSearch, productSearchPage, selectSizePage, selectColorPage, clickBuyPage} from "../support/pages";
const login = require ('../fixtures/login.json')
const data = require ('../fixtures/data.json')

describe ('Testes de validação usando cy.intercept', () =>{

  beforeEach(() => {
    cy.visit (Cypress.env('minhaConta'))
    loginPage.login(login.email, login.senha)
  });

  it('Deve realizar pesquisa do produto com sucesso', () => {
    cy.intercept({
      method: 'GET',
      url: '/wp-admin/admin-ajax*',
      query: {
        term: 'jacket'
      }
    }, (req) => {
      req.reply({
        statusCode: 200,
        body: `${req.query.callback}(
          ${JSON.stringify(data.autocompleteSearchData)}
        )`
      });
    }).as('getJacket');

    clickSearch.searchMagnifier();
    productSearchPage.search('jacket');
    cy.wait('@getJacket');
    productSearchPage.productList.first().should('have.attr', 'title', 'Ingrid Running Jacket');
  });
});
  
  it.skip('Deve adicionar produto ao carrinho com sucesso', () =>{

    cy.intercept({
        method: 'GET',
        url: '/prodcut/ingrid-running-jacket*',
        query: {
            term: 'ingrid-running-jacket'
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

    clickSearch.searchMagnifier()
    productSearchPage.search('Daily')
    productSearchPage.productList.first().click().should('have.attr', 'title', 'Aero Daily Fitness Tee')
    selectSizePage.selectSize()
    selectColorPage.selectColor()
    clickBuyPage.buttonbuy()
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
  })
