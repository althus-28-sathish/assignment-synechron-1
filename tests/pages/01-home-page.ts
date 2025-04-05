import { Page, Locator } from "@playwright/test";

export class HomePage {
  private page: Page;
  private alert:Locator;
  private specialCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alert = this.page.getByRole('button',{name:'Tout Accepter'});
    this.specialCards = this.page.getByRole("link", {name: "Cartes Particuliers",});
  }

  async selectCardType() {
    await this.page.waitForTimeout(5000);
    await this.alert.click();
    await this.specialCards.click();
  }
}
