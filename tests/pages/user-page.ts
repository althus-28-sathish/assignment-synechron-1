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
  private saveAndContinue: Locator;
  //
  //
  private successMessage: Locator;

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
    await this.userFirstName.fill("Martin");
    await this.userLastName.fill("Franc");
    await this.userDOB.fill("11112000");
    await this.userEmail.fill("martin@franc.com");
    await this.userPhoneNo.fill("0612345678");
    await this.userTitle.click();
    //
    await this.savePersonalDetails.click();
  }

  async vosInformationsPersonelles() {
    //
    await this.birthNameCheck.check();
  }

  async validateSuccessMessage() {
    //
    await this.successMessage.isVisible();
  }
}
