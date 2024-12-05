describe("user visit GoIT page", () => {
    beforeEach("go to page", () => {
      cy.visit("https://www.edu.goit.global/account/login");
    });
  
    it("Test1", () => {
      cy.get('#user_email').type("user888@gmail.com");
      cy.get('#user_password').type("1234567890");
      cy.get('.eckniwg2').click();
  
      // Sprawdź, czy dashboard jest widoczny
    //   cy.get(".next-vhmemw > .MuiBox-root").should('be.visible').click();
      cy.get('#open-navigation-menu-mobile').should('be.visible').click();
      // Czekaj na element lub użyj precyzyjniejszego selektora
      cy.get(':nth-child(12) > .next-bve2vl', { timeout: 10000 }).should('exist').click();
    });
  });
  
         