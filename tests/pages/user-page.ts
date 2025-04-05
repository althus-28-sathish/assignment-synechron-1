import { Page, Locator } from "@playwright/test";

export class UserDetailsPage {
  private page: Page;
  private carteGoldAmericanExpress: Locator;
  private successMessage: Locator;
  //
  private userTitle: Locator;
  private userFirstName: Locator;
  private userLastName: Locator;
  private userDOB: Locator;
  private userEmail: Locator;
  private userPhoneNo: Locator;
  private savePersonalDetails: Locator;
  //
  private birthNameCheck: Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.userTitle = this.page.locator("label").filter({ hasText: "M." });
    this.userFirstName = this.page.getByRole("textbox", { name: "Prénom" });
    this.userLastName = this.page.getByRole("textbox", {
      name: "Nom",
      exact: true,
    });
    this.userDOB = this.page.getByRole("textbox", {
      name: "Date de naissance (JJ/MM/AAAA)",
    });
    this.userEmail = this.page.getByRole("textbox", { name: "Adresse e-mail" });
    this.userPhoneNo = this.page.getByRole("textbox", {
      name: "Numéro de téléphone portable",
    });
    this.savePersonalDetails = this.page.getByRole("button", {
      name: "Sauvegarder et Continuer",
    });

    this.birthNameCheck = this.page.locator(
      '//input[contains(@id,"birthNameCheck")]'
    );

    //
    this.successMessage = this.page.locator("");
  }

  async fillUserPersonalDetails() {
    await this.userTitle.click();
    await this.page.waitForTimeout(3000);
    await this.userFirstName.fill("Martin");
    await this.page.waitForTimeout(3000);
    await this.userLastName.fill("Franc");
    await this.page.waitForTimeout(3000);
    await this.userDOB.fill("11112000");
    await this.page.waitForTimeout(3000);
    await this.userEmail.fill("martin@franc.com");
    await this.page.waitForTimeout(3000);
    await this.userPhoneNo.fill("0612345678");
    await this.page.waitForTimeout(3000);
    await this.userTitle.click();
    //
    await this.savePersonalDetails.click();
  }

  async vosInformationsPersonelles() {
    //
    await this.birthNameCheck.check();
  }
}
