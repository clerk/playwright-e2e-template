## Page objects

Each Page should represent a cohesive set of identifiers and actions living under a view.

### Structure

A Page object should follow the structure below so as to keep it as clear and coherent as possible.

You can use the definition below as a template

```typescript
export class Page {
  /** Playwright page object */
  private page: Page;

  /** test-ids belonging to this page */
  private firstNameInputId = "first-name";
  private continueButtonId = "continue";

  /** selectors */
  private lastNameInput = 'form [name="lastName"]';

  /** public properties */
  url = config.accountsHost + "/sign-up";

  constructor(page: Page) {
    /** Setting the page object */
    this.page = page;
  }

  /** navigate function */
  navigate(): Promise<Response | null> {
    return this.page.goto(this.url);
  }

  /** example setters for elements */
  setEmail(firstName: string): Promise<void> {
    return this.page.type(`data-test-id=${this.firstNameInputId}`, firstName);
  }

  setLastName(lastName: string): Promise<void> {
    return this.page.type(this.lastNameInput, lastName);
  }

  /** example actions for this Page object */
  continue(): Promise<void> {
    return this.page.click(`data-test-id=${this.continueButtonId}`);
  }

  /** Page specific helper functions that help us package some logic and keep the PageObjects as cohesive as possible. */
  fillForm(): Promise<void> {
    const signupAttributes = createSignupAttributes(attributes);
    await this.setEmail(signupAttributes.email);
    await this.setFirstName(signupAttributes.firstName);
    await this.setLastName(signupAttributes.lastName);
    await this.setPassword(signupAttributes.password);
    return;
  }
}
```

### Note on the `navigate` function

The navigate function should be required in most Page objects in order to encapsulate the method in which the client can either _test out_ if the page has been navigated to the correct location or navigate to it as a new document navigation.
This is to make the handling of Pages and transition between views consistent between MPA and SPA scenarios.

E.g.

```typescript
  /** navigate to the page in an MPA scenario */
  navigate(): Promise<Response | null> {
    return this.page.goto(this.url);
  }

  /** make sure you are navigated and can manipulate the page on an SPA scenario */
  async navigate(): Promise<void> {
    await this.page.waitForSelector(`data-test-id=${this.pageIdentifier}`, {
      timeout: 15000,
    });
    return;
  }
```

Some nice references:

- https://webdriver.io/docs/pageobjects/
- https://playwright.dev/docs/pom
- https://martinfowler.com/bliki/PageObject.html
