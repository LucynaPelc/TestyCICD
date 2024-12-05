describe("user visit GoIT page", () => {
    
beforeEach("go to page", () =>{
    cy.visit("https://www.edu.goit.global/account/login");
})    
    it("Test1", () =>{
        cy.get('#user_email').type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
        cy.get('.eckniwg2').click();

        cy.get(".next-vhmemw > .MuiBox-root").click();
        
        cy.get(":nth-child(12) > .next-bve2vl").click();
    })
    it("Test2", () =>{
        cy.get('#user_email').type("testowyqa@qa.team");
        cy.get('#user_password').type("QA!automation-1");
        cy.get('.eckniwg2').click();

        cy.get(".next-vhmemw > .MuiBox-root").click();
        
        cy.get(":nth-child(12) > .next-bve2vl").click();
    })

})

