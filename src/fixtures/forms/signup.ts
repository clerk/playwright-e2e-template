/**
 * Typed fixture factories are the best!
 *
 * Usage of the Partial type helper, will allow you to create differentiated fixtures for the cases you need,
 * without typing again and again all the attributes just to make TS happy.
 *
 * This could be an example of form data to be added for a sign-up type of flow.
 */

import faker from "faker";

type SignUp = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export function createSignupAttributes(attributes: Partial<SignUp>): SignUp {
  return {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(12),
    ...attributes,
  };
}
