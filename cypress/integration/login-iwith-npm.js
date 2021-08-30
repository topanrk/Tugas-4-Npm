describe('Test Case Product Store',function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })
    it('login',function(){
        cy.get('#login2').click()
        cy.get('#loginusername').type('dede')
        cy.wait(6000)
        cy.get('#loginusername').should('have.value','dede')
        cy.get('#loginpassword').type('dede')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
    it('display name',function(){
        cy.get('#nameofuser').should('have.text','Welcome dede')
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})