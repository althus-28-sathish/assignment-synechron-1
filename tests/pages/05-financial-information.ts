import { Page, Locator } from "@playwright/test";

export class FinancialInformationPage {
  private page: Page;
  //
  private iban: Locator;
  private swiftCode: Locator;
  private seniority: Locator;
  private income: Locator;
  private otherSourceNo: Locator;
  private estimate: Locator;
  private socio: Locator;
  private profession: Locator;
  //
  private saveFinancialInformation: Locator;

  constructor(page: Page) {
    this.page = page;
    //
  }

  async fillFinancialInformation() {
    //
    await this.iban.fill('FR1420041010050500013M02606');
    await this.swiftCode.fill('EBATFRPPEB1');
    await this.seniority.selectOption({index:1});
    await this.income.fill("11111");
    await this.otherSourceNo.check();
    await this.estimate.selectOption({index:3});
    await this.socio.selectOption({index:2});
    await this.profession.selectOption({index:3});
    //
    await this.saveFinancialInformation.click();
  }
}
