describe("Application", () => {

  beforeEach(() => {
    // cy.viewport('iphone-x')
  });

  context.only('- landing page', () => {
    beforeEach(() => { 
      cy.visit("/");
    });
  
  
    it("is expected to show a title", () => {
      cy.get('body').should("contain", "Hellars Affärsbyrå");
    });
  });

  context('sub page - legal services', () => {
    
    beforeEach(() => {
      cy.visit("/legal");
    });

    it('is expected to hav internal route', () => {
      cy.url().should("contain", "/legal");
    });

      
    it("is expected to show a title", () => {
      cy.get('body').should("contain", "Juridik");
    });

  });

  context('sub page - accounting', () => {
    beforeEach(() => {
      cy.visit("/accounting");
    });

    it('is expected to hav internal route', () => {
      cy.url().should("contain", "/accounting");
    });

      
    it("is expected to show a title", () => {
      cy.get('body').should("contain", "Redovisning");
    });
  });

  context('sub page - digital services', () => {
    beforeEach(() => {
      cy.visit("/digital");
    });

    it('is expected to hav internal route', () => {
      cy.url().should("contain", "/digital");
    });

      
    it("is expected to show a title", () => {
      cy.get('body').should("contain", "Digitalisering");
    });
  });

  context('sub page - management services', () => {
    beforeEach(() => {
      cy.visit("/management");
    });

    it('is expected to hav internal route', () => {
      cy.url().should("contain", "/management");
    });

      
    it("is expected to show a title", () => {
      cy.get('body').should("contain", "Affärsutveckling");
    });
  });

});
