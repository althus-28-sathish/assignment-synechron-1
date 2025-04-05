import { Page, Locator } from "@playwright/test";

export class PersonalCardsPage {
  private page: Page;
  private carteGoldAmericanExpress: Locator;

  constructor(page: Page) {
    this.page = page;
    this.carteGoldAmericanExpress = this.page.getByRole("link", {
      name: "Cartes Particuliers",
    });
  }

  async selectCardType() {
    await this.carteGoldAmericanExpress.click();
  }
}
