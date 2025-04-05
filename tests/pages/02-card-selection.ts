import { Page, Locator } from "@playwright/test";

export class CardSelectionPage {
  private page: Page;
  private aeGoldCard: Locator;
  private applyCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aeGoldCard = this.page.getByRole("link", { name: "En savoir plus" }).nth(1);
    this.applyCard = this.page.getByRole("link", { name: "Demandez votre Carte" }).first();
  }

  async selectCardType() {
    await this.aeGoldCard.click();
    await this.applyCard.click();
  }
}
