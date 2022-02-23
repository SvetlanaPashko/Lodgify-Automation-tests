function checkCurrency() {
  return function (value, type) {
    this.totalSum().contains(value);
    this.currency().contains(type);
  };
}

export const options = {
  euro: "€ EUR",
  dollar: "$ USD",
  pounds: "£ GBP",
};

export const numberOfRentals = {
  setValue: (value) => cy.get("#scroll-prop-plan").clear().type(value),
};

export function dataPeriods() {
  const getPeriod = (numberElement) => () =>
    cy
      .get(`.tabs-select > ul > li:nth-child(${numberElement})`)
      .should("have.class", "active");

  const periods = {
    monthly: {
      isSelected: getPeriod(1),
    },
    yearly: {
      isSelected: getPeriod(2),
    },
    twoYears: {
      isSelected: getPeriod(3),
    },
  };
  return periods;
}
export const priceCards = {
  starter: {
    title: () => cy.get(".price-card-starter .plan-name"),
    totalSum: () => cy.get(".price-card-starter .plan-price .total-sum"),
    currency: () => cy.get(".price-card-starter .plan-price .currency-symbol"),
    checkCurrency: checkCurrency.call(this),
  },
  professional: {
    title: () => cy.get(".price-grid > :nth-of-type(2) .plan-name"),
    totalSum: () =>
      cy.get(".price-grid > :nth-of-type(2) .plan-price .total-sum"),
    currency: () =>
      cy.get(".price-grid > :nth-of-type(2) .plan-price .currency-symbol"),
    checkCurrency: checkCurrency.call(this),
  },
  ultimate: {
    title: () => cy.get(".price-grid > :last-child .plan-name"),
    totalSum: () => cy.get(".price-grid > :last-child .plan-price .total-sum"),
    currency: () =>
      cy.get(".price-grid > :last-child .plan-price .currency-symbol"),
    checkCurrency: checkCurrency.call(this),
  },
};
export const currencyTypes = {
  text: () => cy.get(".row-sm.valign-center .col-auto"),
  options: () => cy.get(".price-currency-select.form-control"),
};
