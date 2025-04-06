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
    await this.alert.click({timeout:5000});
    await this.specialCards.click();
  }
}
