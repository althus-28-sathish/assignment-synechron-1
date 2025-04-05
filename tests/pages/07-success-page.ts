import { Page, Locator, expect } from "@playwright/test";

export class SuccessPage {
  private page: Page;
  //
  private closePage: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.successMessage = this.page.locator("");
    //
    this.closePage = this.page.getByRole("button", { name: "Fermez la Page" });
  }

  async validateSuccessMessage() {
    //
    await expect(this.successMessage).toContainText("Camelle Martin");
  }

  async closeApplication() {
    //
    await this.closePage.click();
  }
}
