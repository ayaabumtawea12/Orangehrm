describe('DOM FUNCTION', () => {
 
    it('Change DOM ', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.get('.todo-button')
    cy.get('.todo-button').eq(0).click({force:true})

    
   cy.get('.todo-button').invoke('show');//show element when not visible 
   cy.get('.todo-button').eq(0).invoke('show').click()
   cy.contains('a','Active').trigger('mouseover')
   
    })
    
  it.only('Change DOM ', () => {
    cy.visit('https://example.cypress.io/commands/cookies')
    cy.getCookies().should('.be.empty')
    cy.get('#getCookie .set-a-cookie').click();
    cy.getCookies().should('have.length',2).should((cookies)=>{
  expect((cookies[0])).to.have.property('value','token')
  expect((cookies[0])).to.have.property('value','123ABC')
  
  
   
    })
  })
  
})