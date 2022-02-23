const { faker } = require("@faker-js/faker");

export default {
  text: faker.lorem.paragraph,
  word: faker.word.noun,
  email: faker.internet.email,
  phone: faker.phone.phoneNumberFormat,
};
