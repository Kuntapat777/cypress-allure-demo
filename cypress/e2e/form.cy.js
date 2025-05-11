describe('📝 แบบฟอร์มว่าง', () => {
  it('ควรแสดงข้อความ error เมื่อ input ว่าง', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#submit').click()
    cy.get('#userName-wrapper').should('exist')
  })
})
