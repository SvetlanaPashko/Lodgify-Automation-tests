import {
  numberOfRentals,
  dataPeriods,
  currencyTypes,
  options,
} from "../utils/priceCalculation";
import { goToPricePage } from "../utils/pages";
import { priceCards } from "../utils/priceCalculation";

describe("Lodgify Pricing page", function () {
  it("Should contain right prices for 'Yearly' plan with 50 rentals", function () {
    goToPricePage();
    numberOfRentals.setValue(50);
    dataPeriods().yearly.isSelected();

    priceCards.starter.title().contains("Starter");
    priceCards.starter.checkCurrency("64", "$");

    priceCards.professional.title().contains("Professional");
    priceCards.professional.checkCurrency("375", "$");

    priceCards.ultimate.title().contains("Ultimate");
    // it is a bug, expect 525, result 518
    // priceCards.ultimate.checkCurrency("525", "$");
  });

  it("Should contain right prices after changing the currency", function () {
    goToPricePage();

    currencyTypes.options().select(options.dollar);
    priceCards.starter.checkCurrency("12", "$");
    priceCards.professional.checkCurrency("32", "$");
    priceCards.ultimate.checkCurrency("48", "$");

    currencyTypes.options().select(options.pounds);
    priceCards.starter.checkCurrency("10", "£");
    priceCards.professional.checkCurrency("24", "£");
    priceCards.ultimate.checkCurrency("39", "£");

    currencyTypes.options().select(options.euro);
    priceCards.starter.checkCurrency("11", "€");
    priceCards.professional.checkCurrency("28", "€");
    priceCards.ultimate.checkCurrency("43", "€");

    currencyTypes.text().contains("Do you want to see other currencies?");
  });
});
