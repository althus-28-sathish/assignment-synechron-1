import { Page, Locator } from "@playwright/test";

export class HomePage {
  private page: Page;
  private cartesParticuliers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartesParticuliers = this.page.getByRole("link", {
      name: "Cartes Particuliers",
    });
  }

  async selectCardType() {
    await this.cartesParticuliers.click();
  }
}
