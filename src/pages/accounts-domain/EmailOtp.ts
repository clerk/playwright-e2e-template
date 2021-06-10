import type { Page } from "playwright";
import { config } from "../../../src/config";

export class EmailOtp {
  /** page */
  private page: Page;

  /** test-ids */
  private otpContainer = "otp-container";

  /** properties */
  url = config.HOST + "/sign-up/verify-email-address";

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.waitForSelector(`data-test-id=${this.otpContainer}`, {
      timeout: 15000,
    });
    return;
  }

  /**
   *
   * A bit more complex action e.g. for filling an OTP code with Playwright.
   *
   */
  async setOtp(otpCode: string): Promise<void> {
    await this.page.click(`[data-test-id="${this.otpContainer}"] input`);
    for (const digitIdx in otpCode as any) {
      await this.page.type(
        `[data-test-id="${this.otpContainer}"] input:nth-of-type(${
          Number(digitIdx) + 1
        })`,
        otpCode[Number(digitIdx)],
        { delay: 100 }
      );
    }
    return;
  }
}
