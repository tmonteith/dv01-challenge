Cypress.Commands.add("getLoanAmount", () => {
    return cy.get("._3bR9qI > .r8B6Mb > :nth-child(1) > ._3No0nV > ._1hmOca");
  });
  
  Cypress.Commands.add("getDownPaymentAmount", () => {
    return cy.get(".weJnJg > ._3No0nV > ._1hmOca");
  });
  
  Cypress.Commands.add("getInterestRate", () => {
    return cy.get("._pUZbi > ._1hmOca");
  });
  
  Cypress.Commands.add("getPropertyTaxes", () => {
    return cy.get(
      '._29JYfc > :nth-child(1) > ._3ybPNt > [data-currency="Stack"] > :nth-child(3) > ._2I-9m4 > :nth-child(1) > ._3No0nV > ._1hmOca'
    );
  });
  
  Cypress.Commands.add("getInsuranceAmount", () => {
    return cy.get(
      '._29JYfc > :nth-child(1) > ._3ybPNt > [data-currency="Stack"] > :nth-child(5) > ._2I-9m4 > :nth-child(1) > ._3No0nV > ._1hmOca'
    );
  });
  
  Cypress.Commands.add("getPMIAmount", () => {
    return cy.get(
      '._29JYfc > :nth-child(1) > ._3ybPNt > [data-currency="Stack"] > :nth-child(9) > ._2I-9m4 > :nth-child(1) > ._3No0nV > ._1hmOca'
    );
  });
  
  Cypress.Commands.add("getMonthlyPaymentAmount", () => {
    return cy.get("._3Ku8iN._298zm0 > ._2Sit1B");
  });
  
  Cypress.Commands.add("getMonthlyPrincipalAmount", () => {
    return cy.get(
      '._29JYfc > :nth-child(1) > ._3ybPNt > [data-currency="Stack"] > :nth-child(1) > ._2I-9m4 > :nth-child(1) > ._3TJCMi > :nth-child(2)'
    );
  });
  
  Cypress.Commands.add("getErrorMessage", () => {
    cy.get("#diy-tools-hac-1-21-1-error-message");
  });