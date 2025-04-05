import { Page, Locator } from "@playwright/test";

export class CardSelectionPage {
  private page: Page;
  private carteGoldAmericanExpress: Locator;
  private demandezVotreCarte: Locator;

  constructor(page: Page) {
    this.page = page;
    this.carteGoldAmericanExpress = this.page
      .getByRole("link", { name: "En savoir plus" })
      .nth(1);
    this.demandezVotreCarte = this.page
      .locator("#pdp-side-railwrapper")
      .getByRole("link", { name: "Demandez votre Carte" });
  }

  async selectCardType() {
    await this.carteGoldAmericanExpress.click();
    await this.demandezVotreCarte.click();
  }
}
