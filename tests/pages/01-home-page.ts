import { Page, Locator } from "@playwright/test";

export class HomePage {
  private page: Page;
  private specialCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.specialCards = this.page.getByRole("link", {name: "Cartes Particuliers",});
  }

  async selectCardType() {
    await this.specialCards.click();
  }
}
