describe('Test Product Purchasing', function() {
    before (()=> {
        cy.login()
    })
    it('Cek login', function(){
        cy.wait(10000)
        cy.get('#nameofuser').should('have.text','Welcome dede')
    })
    it('Purchasing', function(){
        cy.contains('HTC One M9').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        cy.contains('Laptops').click()
        cy.contains('Dell i7 8gb').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        cy.go('back')
        cy.contains('Monitors').click()
        cy.wait(6000)
        cy.contains('Apple monitor 24').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.go('back')
        cy.go('back')
        cy.go('back')
        cy.get('#cartur').click()
        cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should('have.text','Dell i7 8gb')
        cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').should('have.text','Apple monitor 24')
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#totalm').should('have.text','Total: 1100')
        cy.get('#name').type('dudu').should('have.value','dudu')
        cy.get('#country').type('India').should('have.value','India')
        cy.get('#city').type('Delhi').should('have.value','Delhi')
        cy.get('#card').type('123456789').should('have.value','123456789')
        cy.get('#month').type('Februari').should('have.value','Februari')
        cy.get('#year').type('2022').should('have.value','2022')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})