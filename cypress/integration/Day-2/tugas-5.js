describe('Validate Input', function(){
    it('Validate Input', function(){
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type('Test',{force:true}).should('have.value','Test')
        cy.get('#lastName').type('Ulang',{force:true}).should('have.value','Ulang')
        cy.get('#userEmail').type('name@gmail.com',{force:true}).should('have.value','name@gmail.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('0123456',{force:true}).should('have.value','0123456')
        cy.get('#dateOfBirthInput' , {force : true}).click().type('{selectall}' , '{backspace}').type('01 May 1997').type('{enter}')
        cy.get('.subjects-auto-complete__value-container').type('English{enter}').should('have.text','English')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#uploadPicture').attachFile('covid-19_logo_500px_0.png')
        cy.get('#currentAddress').type('Jalan Bahagia').should('have.value','Jalan Bahagia')
        cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click()
        cy.get('.css-1pahdxg-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').type('NCR{enter}',{multiple:true})
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})