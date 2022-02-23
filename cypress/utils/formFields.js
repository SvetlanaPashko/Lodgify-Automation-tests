import { datePicker } from "./datePicker";

const getField = (name) => ({
  field: () => cy.get(`[name=${name}]`),
  validation: () =>
    cy
      .get(`[name=${name}]`)
      .parent()
      .should("have.class", "error")
      .get(".label"),
});

export const formFields = {
  name: getField("name"),
  phone: getField("phone"),
  email: getField("email"),
  guests: getField("guests"),
  arrival: () => cy.get("[aria-label=Arrival]"),
  departure: () => cy.get("[aria-label=Departure]"),
  comment: {
    field: () => cy.get("[placeholder=Comment]"),
    validation: () => cy.get("[placeholder=Comment]").parent().get(".label"),
  },
  submit: () => {
    cy.get("[type=submit]").click();
    cy.wait(1000);
  },
  datePicker,
  protectionField: {
    text: () => cy.get(".light.tiny"),
    link1: () => cy.get(".light.tiny a:nth-of-type(1)"),
    link2: () => cy.get(".light.tiny a:nth-of-type(2)"),
  },
};
