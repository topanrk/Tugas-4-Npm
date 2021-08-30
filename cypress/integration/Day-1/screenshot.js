describe('coba screenshot', function (){
    it('coba screenshot', function (){
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2')
        cy.screenshot()
    })
})