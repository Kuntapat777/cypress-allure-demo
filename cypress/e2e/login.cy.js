import user from '../fixtures/user.json'

describe('🧪 ทดสอบระบบ Login', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  it('✅ Login สำเร็จ', () => {
    cy.login(user.valid.username, user.valid.password)
    cy.url().should('include', '/dashboard')
    cy.get('h6').should('have.text', 'Dashboard')
  })

  it('❌ Login ล้มเหลว', () => {
    cy.login(user.invalid.username, user.invalid.password)
    cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain', 'Invalid credentials')
  })
})
