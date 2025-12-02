/*
===========================================
📚 CYPRESS CHEAT SHEET - REFERENCIA RÁPIDA
===========================================

Este archivo contiene ejemplos de código listos para usar.
No es un test ejecutable, sino una referencia educativa.

👉 CÓMO USAR:
1. Copia el código que necesites
2. Pégalo en tu archivo de test
3. Ajusta los selectores y valores

===========================================
*/

// ========================
// 1. ESTRUCTURA BÁSICA
// ========================

describe('Mi conjunto de pruebas', () => {
  // Hook: Se ejecuta ANTES de cada test
  beforeEach(() => {
    cy.visit('https://ejemplo.com')
    cy.log('Navegando a la página inicial...')
  })

  // Hook: Se ejecuta DESPUÉS de cada test
  afterEach(() => {
    cy.log('Test completado!')
  })

  // Test individual
  it('debería hacer algo específico', () => {
    // Tu código aquí
    cy.get('#elemento').should('be.visible')
  })
})

// ========================
// 2. SELECTORES COMUNES
// ========================

// POR ID
cy.get('#login-button')

// POR CLASE
cy.get('.btn-primary')
cy.get('.menu .item') // Anidado

// POR ATRIBUTO
cy.get('[data-test="submit"]')
cy.get('[type="email"]')
cy.get('[href="/dashboard"]')

// POR TEXTO
cy.contains('Iniciar Sesión')
cy.contains('div', 'Texto exacto en div')

// XPATH (evitar si es posible)
cy.xpath('//button[text()="Save"]')

// ========================
// 3. INTERACCIONES
// ========================

// TYPING
cy.get('#email')
  .type('usuario@test.com')
  .type('{enter}') // Teclas especiales

// CLICKS
cy.get('#submit').click()
cy.get('#submit').dblclick()
cy.get('#menu').rightclick()

// DROPDOWNS
cy.get('select#paises').select('Mexico')

// CHECKBOXES & RADIOS
cy.get('[type="checkbox"]').check()
cy.get('[type="radio"]').first().check()
cy.get('#terms').uncheck()

// ========================
// 4. ASERCIONES (should)
// ========================

// VISIBILIDAD
cy.get('.modal').should('be.visible')
cy.get('.loader').should('not.exist')

// TEXTO
cy.get('h1').should('have.text', 'Bienvenido')
cy.get('.message').should('contain', 'éxito')
cy.get('.count').should('include.text', '10')

// ATRIBUTOS
cy.get('#input').should('have.value', 'texto')
cy.get('#link').should('have.attr', 'href', '/home')

// ESTADO
cy.get('#button').should('be.disabled')
cy.get('#checkbox').should('be.checked')
cy.get('#input').should('be.empty')

// ========================
// 5. ESPERAS Y TIEMPOS
// ========================

// ESPERA IMPLÍCITA (recomendada)
cy.get('.elemento', { timeout: 10000 }).should('be.visible')

// ESPERA EXPLÍCITA (usar con cuidado)
cy.wait(1000) // 1 segundo
cy.wait('@getUsers') // Esperar a una petición API

// ========================
// 6. DEBUGGING
// ========================

cy.get('.elemento')
  .then(($el) => {
    console.log('Texto encontrado:', $el.text())
  })
  .pause() // Pausa la ejecución aquí

// Screenshot
cy.screenshot('nombre-del-archivo')

// ========================
// 7. FIXTURES (DATOS)
// ========================

// Cargar datos desde JSON
cy.fixture('usuarios.json').then((usuarios) => {
  cy.get('#email').type(usuarios.admin.email)
  cy.get('#password').type(usuarios.admin.password)
})

// ========================
// 8. COMANDOS PERSONALIZADOS
// ========================

// Ejemplo: login rápido
Cypress.Commands.add('login', (usuario, password) => {
  cy.get('#username').type(usuario)
  cy.get('#password').type(password)
  cy.get('#submit').click()
})

// Uso en test:
// cy.login('admin', '123456')

// ========================
// 9. PAGE OBJECT MODEL
// ========================

// Ejemplo básico en cypress/support/pages/LoginPage.js
/*
class LoginPage {
  elements = {
    username: () => cy.get('#username'),
    password: () => cy.get('#password'),
    submit: () => cy.get('#login-submit')
  }

  enterUsername(user) {
    this.elements.username().type(user)
  }

  enterPassword(pass) {
    this.elements.password().type(pass)
  }

  submit() {
    this.elements.submit().click()
  }
}
export default LoginPage
*/

// ========================
// 🔗 RECURSOS
// ========================

/*
📚 Documentación Oficial: https://docs.cypress.io
🎯 Ejemplos: https://github.com/cypress-io/cypress-example-kitchensink
💡 Mejores Prácticas: https://docs.cypress.io/guides/references/best-practices
📚 Contenido educativo digital de apuntes: https://docs.google.com/spreadsheets/d/1zSLmARh84RwaDwMXtzPICMWd_c9C1CsnbOuv9pXgvJk/edit?usp=sharing

✨ Creado por: PamStem - QA Automation Coach
📅 Última actualización: 01.12.2025
*/

console.log('✅ Cheat sheet cargado. ¡Happy testing! 🚀')
