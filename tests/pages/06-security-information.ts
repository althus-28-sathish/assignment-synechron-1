import { Page, Locator, expect } from "@playwright/test";

export class SecurityInformationPage {
  private page: Page;
  //
  private maidenName: Locator;
  private securityPIN: Locator;
  private confirmPIN: Locator;
  private isCustomer: Locator;
  private subscribeEmail: Locator;
  private subscribeSms: Locator;
  private submitButton: Locator;
  //
  private closePage: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.maidenName = this.page.getByRole("textbox", {
      name: "Nom de jeune fille de votre m",
    });
    this.securityPIN = this.page.getByRole("textbox", {
      name: "Choisissez votre code PIN à 4",
    });
    this.confirmPIN = this.page.getByRole("textbox", {
      name: "Confirmez votre code PIN",
    });
    this.isCustomer = this.page.locator("");
    this.subscribeEmail = this.page.locator("");
    this.subscribeSms = this.page.locator("");
    this.submitButton = this.page.locator("");
    //
    this.closePage = this.page.getByRole("button", { name: "Fermez la Page" });
  }

  async fillSecurityInformation() {
    //
    await this.closePage.click()
    //
  }
}
