import { config } from "../../config";
import { createSignupAttributes } from "../../fixtures/forms/signup";
import type { Page, Response } from "playwright";

export class SignUp {
  /** page */
  private page: Page;

  /** selectors */
  private firstNameInput = "#firstName";
  private lastNameInput = "#lastName";
  private usernameInput = "#username";
  private passwordInput = "#password";
  private emailInput = "#emailAddress";
  private phoneInput = "#phoneNumber";
  private signUpButton = ".cl-sign-up-button";

  /** properties */
  url = config.HOST + "/sign-up";

  constructor(page: Page) {
    this.page = page;
  }

  /** navigate function */
  navigate(): Promise<Response | null> {
    return this.page.goto(this.url);
  }

  setEmail(email: string): Promise<void> {
    return this.page.type(this.emailInput, email);
  }

  setUsername(username: string): Promise<void> {
    return this.page.type(this.usernameInput, username);
  }

  setPassword(password: string): Promise<void> {
    return this.page.type(this.passwordInput, password);
  }

  setPhoneNumber(phone: string): Promise<void> {
    return this.page.type(this.phoneInput, phone);
  }

  async setFirstName(firstName: string): Promise<void> {
    return this.page.type(this.firstNameInput, firstName);
  }

  async setLastName(lastName: string): Promise<void> {
    return this.page.type(this.lastNameInput, lastName);
  }

  /** Page helpers */
  async fillForm(attributes: {
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
  }): Promise<void> {
    const signupAttributes = createSignupAttributes(attributes);
    await this.setEmail(signupAttributes.email);
    await this.setFirstName(signupAttributes.firstName);
    await this.setLastName(signupAttributes.lastName);
    await this.setPassword(signupAttributes.password);
    return;
  }

  signUp(): Promise<void> {
    return this.page.click(this.signUpButton);
  }
}
