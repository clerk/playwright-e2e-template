# Playwright End to End suite template

End to End testing suite template using:

- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/
- Jest https://jestjs.io/

## 🤖 Starting up

We have created a sample [Clerk](https://www.clerk.dev/) app which showcases the existing example, so feel free to play around!

1. Install the dependencies using `npm install` or `yarn install`
2. Rename `.env.example` to `.env`
3. Check out the test by running the `test` or the `test:debug` command
4. Have fun building something!

## 📁 Structure

```sh
 |- config # Configuration file/s
 |- external # External system interactions e.g. Database
 |- fixtures # Predefined fixture sets & their factory functions e.g. createSignupAttributes
 |- pages # Sets of pages for our applications
 |- tests # Here is the magic 🧙‍♂️
```

## 🔨 Build your own

To start building something with the suite template:

1. Read this brief document.
2. Read the Pages [README](./src/pages/README.md).
3. Dig in the documentation of the tools as you see fit.

## 📜 Pages

For the suite template we chose to follow the PageObjects pattern in order to encapsulate each pages internal structure and responsibilities inside its own highly cohesive class file.

That means that for each page we would define a new Page object for our needs. We should not confuse the Page objects we create with actual pages in the application. We can think of Pages as a lightweight concept of a **view**, which is the set of cohesive elements living under a known browser location.

For more on how we structure views internally see the pages [README](./src/pages/README.md).

## 🔬 Using data-test-id to target elements

Playwright provides all the goodies of a selector engine, so as to make it really easy to target elements on the document. As a general guideline for querying inside our tests/Page objects:

1. Prefer user-facing and rarely changing attributes like `roles`, input `types` etc.
2. Use `data-test-id` responsibly.
3. There is no one-size-fits-all.

Also you can take a look at Playwright's take on [selection best practices](https://playwright.dev/docs/selectors#best-practices).

## 🧰 Suite configuration

Our test suit is configured to run using Jest as a testing framework and [jest-playwright](https://github.com/playwright-community/jest-playwright) acting as the glue between Jest and Playwright.

**jest-playwright** has more than a couple of ways to configure the suite so please refer to the [documentation](https://github.com/playwright-community/jest-playwright#configuration).

## 👔 Individual test configuration

In some cases, we might need to run a test with specific suite configurations e.g. _only for a specific browser_ . For those cases we can use the `it.jestPlaywrightConfig` wrapper which allows specific `jest-playwright` options to be passed directly into the test.

## 🎬 Debugging

Playwright provides a couple of great debugging capabilities at all levels. The ones that you will probably find most useful are:

- Setting the `PWDEBUG=1` environment variable before running the tests to attache the [Playwright inspector](https://playwright.dev/docs/inspector/).
- Setting the `DEBUG=pw:api` environment variable to get the Playwright API logs in the console.

For more options take a look at https://playwright.dev/docs/debug
