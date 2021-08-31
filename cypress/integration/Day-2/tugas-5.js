describe('Validate Input', function(){
    it('Validate Input', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Test',{force:true}).should('have.value','Test')
        cy.get('#lastName').type('Ulang',{force:true}).should('have.value','Ulang')
        cy.get('#userEmail').type('name@gmail.com',{force:true}).should('have.value','name@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('0123456',{force:true}).should('have.value','0123456')
        // cy.get('#dateOfBirthInput').click() blocked
        // cy.get('.subjects-auto-complete__value-container').type('English',{force:true}).click('English')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('input[type=file]').attachFile('covid-19_logo_500px_0.png')
        cy.get('#currentAddress').type('Jalan Bahagia').should('have.value','Jalan Bahagia')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})