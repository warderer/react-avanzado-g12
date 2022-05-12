/* eslint-disable no-undef */

/* Declaro como se llama mi grupo de pruebas */
describe('Mi primer test', () => {
  // It: Sirve para indicar que esto es una prueba
  it('Lee "Home" en /', () => {
    // 01. Setup del estado de la App
    cy.visit('/')
    // 02. Ejecute una acción o acciones
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })

  it('Haz login como CUSTOMER', () => {
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    cy.get('#email').type('drstrange@marvel.com')
    cy.get('#password').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi')
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })

  it('Haz login como CUSTOMER y ve el mensaje secreto de Bienvenida', () => {
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')
    cy.get('#email').type('drstrange@marvel.com')
    cy.get('#password').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi')
    cy.get('ul.nav').last().click() // Selecciono el último elemento del Nav y le hago clic
    cy.contains('Bienvenido seas cliente') // 03. Espero un resultado
  })
})
