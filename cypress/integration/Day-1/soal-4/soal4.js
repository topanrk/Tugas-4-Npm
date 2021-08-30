describe('Test Case Product Store',function(){
    before(()=>{
        cy.visit('https://www.demoblaze.com/index.html')
    })

    it('Pilih Hp', function(){
        cy.contains('Samsung galaxy s6').click()
        cy.wait(6000)
        cy.get('.name').should('have.text','Samsung galaxy s6')
        cy.get('.col-sm-12 > .btn').should('have.text','Add to cart')
        cy.get('.col-sm-12 > .btn').click()
        cy.on('windows:alert',(str)=> {
            expect(str).to.equal('Product added')
        })
    }),

    it('Cek Out',function(){
        cy.get('#cartur').click()
        cy.get('.col-lg-1 > h2').should('have.text','Total')
        cy.wait(6000)
        cy.get('.col-lg-1 > .btn').click()
        // cy.get('#totalm').should('have.text','129560')
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