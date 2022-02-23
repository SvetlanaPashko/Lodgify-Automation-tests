const goNextMonth = () =>
  cy.get("[aria-label='Move forward to switch to the next month.']").click();

const selectMonth = (month) => {
  cy.wait(1000);
  cy.get(".CalendarMonthGrid__horizontal>:nth-child(2)")
    .invoke("text")
    .then((value) => {
      const selectedMonth = value.split(" ")[0];
      if (selectedMonth !== month) {
        goNextMonth();
        selectMonth(month);
      }
    });
};

const selectDay = (day) => {
  cy.wait(1000);
  cy.get(
    `.CalendarMonthGrid__horizontal > :nth-child(2) table td:contains(${day})`
  ).click();
};

export const datePicker = {
  open: () => {
    cy.wait(2000);
    cy.get(".DateRangePicker [type=button] .icon").click();
    cy.wait(2000);
  },
  selectMonthAndDay: (month, day) => {
    selectMonth(month);
    selectDay(day);
  },
  arrowBackward: () =>
    cy.get("[aria-label='Move backward to switch to the previous month.']"),
  calendarDays: ".CalendarMonth_table",
};
