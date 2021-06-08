import type { Page } from 'playwright';

export class EmailOtp {
  /** page */
  private page: Page;

  /** test-ids */
  private otpContainer = 'otp-container';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.waitForSelector(`data-test-id=${this.otpContainer}`, {
      timeout: 15000,
    });
    return;
  }

  async setOtp(otpCode: string): Promise<void> {
    await this.page.click(`[data-test-id="${this.otpContainer}"] input`);
    for (const digitIdx in otpCode as any) {
      await this.page.type(
        `[data-test-id="${this.otpContainer}"] input:nth-of-type(${
          Number(digitIdx) + 1
        })`,
        otpCode[Number(digitIdx)],
        { delay: 100 },
      );
    }
    return;
  }
}
