import { Page, Locator, expect } from "@playwright/test";

export class SecurityInformationPage {
  private page: Page;
  //
  private maidenName: Locator;
  private securityPIN: Locator;
  private confirmPIN: Locator;
  private isCustomerNo: Locator;
  private subscribeEmailYes: Locator;
  private subscribeSmsNo: Locator;
  private submitButton: Locator;
  //
  private closePage: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.maidenName = this.page.getByRole("textbox", {      name: "Nom de jeune fille de votre m",    });
    this.securityPIN = this.page.getByRole("textbox", {      name: "Choisissez votre code PIN à 4",    });
    this.confirmPIN = this.page.getByRole("textbox", {      name: "Confirmez votre code PIN",    });
    this.isCustomerNo = this.page.locator("");
    this.subscribeEmailYes = this.page.locator("");
    this.subscribeSmsNo = this.page.locator("");
    this.submitButton = this.page.locator("");
    //
    this.closePage = this.page.getByRole("button", { name: "Soumettre" });
  }

  async fillSecurityInformation() {
    //
    await this.maidenName.fill('Camelle');
    await this.securityPIN.fill('1234');
    await this.confirmPIN.fill('1234');
    await this.isCustomerNo.click();
    await this.subscribeEmailYes.check();
    await this.subscribeSmsNo.check();
    //
    await this.submitButton.click()
  }
}
