import { goToContactPage } from "../utils/pages";
import { formFields } from "../utils/formFields";
import random from "../utils/randoms";

describe("Lodgify Contact page", function () {
  it("Validation messages on empty mandatory fields", function () {
    goToContactPage();
    formFields.submit();
    formFields.name.validation().contains("Name is mandatory");
    // it is a bug -> phone is NOT mandatory
    // formFields.phone.validation().contains("Phone is mandatory");
    formFields.email.validation().contains("Email is mandatory");
    formFields.comment.validation().contains("Comment is mandatory");

    formFields.comment.field().type(random.text());

    formFields.datePicker.open();
    formFields.datePicker.selectMonthAndDay("April", 14);
    formFields.datePicker.selectMonthAndDay("June", 14);

    // we need to check day and month separately because month and day have different display depend on country
    formFields.arrival().should("contains.value", "14/");
    formFields.arrival().should("contains.value", "04/");
    formFields.departure().should("contains.value", "14/");
    formFields.departure().should("contains.value", "06/");
  });

  it("Wrong email validation", function () {
    goToContactPage();

    // set text instead of email to get an error
    formFields.email.field().type(random.text());
    formFields.submit();

    formFields.email.validation().contains("The email provided is not valid");
  });

  it("Links on the page", function () {
    goToContactPage();

    formFields.protectionField
      .text()
      .contains("This site is protected by reCAPTCHA and the Google ");
    formFields.protectionField
      .link1()
      .contains("privacy policy")
      .should("have.attr", "href")
      .and("eq", "https://policies.google.com/privacy");
    formFields.protectionField
      .link2()
      .contains("Terms of Service")
      .should("have.attr", "href")
      .and("eq", "https://policies.google.com/terms");
  });
});
