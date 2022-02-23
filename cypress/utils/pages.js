const baseUrl = "http://localhost:8080";
export const goToPricePage = () => {
  cy.visit(`${baseUrl}/pricing.html`);
  cy.wait(1000);
};
export const goToContactPage = () => {
  cy.visit(`${baseUrl}/contact.html`);
  cy.wait(1000);
};
