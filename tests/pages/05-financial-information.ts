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
  private saveAndContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.iban=this.page.getByRole("textbox", { name: "IBAN" });
    this.swiftCode=this.page.getByRole("textbox", { name: "Code BIC / SWIFT" });
    this.seniority = this.page.getByLabel("Votre ancienneté bancaire");
    this.income = this.page.getByRole("textbox", { name: "Montant de votre principale" });
    this.otherSourceNo = this.page.getByRole("textbox", { name: "Montant de votre principale" });
    this.estimate=this.page.getByLabel("Estimation de votre");
    this.socio = this.page.getByLabel("Catégorie socio-");
    this.profession=this.page.getByLabel("Votre profession");
    //
    this.saveAndContinue = this.page.getByRole("button", { name: "Sauvegarder et Continuer", });
  }

  async fillFinancialInformation() {
    //
    await this.iban.fill('FR1420041010050500013M02606');
    await this.swiftCode.fill('EBATFRPPEB1');
    await this.seniority.selectOption({index:1});
    await this.income.fill("11111");
    await this.otherSourceNo.check();
    await this.estimate.selectOption({index:3});
    await this.socio.selectOption({index:7});
    await this.profession.selectOption({index:2});
    //
    await this.saveAndContinue.click();
  }
}
