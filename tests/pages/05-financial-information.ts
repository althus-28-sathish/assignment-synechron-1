import { Page, Locator } from "@playwright/test";

export class FinancialInformationPage {
  private page: Page;
  //
  private birthNameCheck: Locator;
  private nomDeNaissance: Locator;
  private lieuDeNaissance: Locator;
  private departementDeNaissance: Locator;
  private paysDeNaissance: Locator;
  private nationality: Locator;
  private paysOuTerritories: Locator;
  private address: Locator;
  private postalCode: Locator;
  private village: Locator;
  private residentialStatus: Locator;
  //
  private saveFinancialInformation: Locator;

  constructor(page: Page) {
    this.page = page;
    //
  }

  async fillFinancialInformation() {
    //
    await this.saveFinancialInformation.click();
  }
}
