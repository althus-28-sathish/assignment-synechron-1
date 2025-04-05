import { Page, Locator, expect } from "@playwright/test";

export class ContactInformationPage {
  //
  private page: Page;
  // declare elements
  private userTitle: Locator;
  private userFirstName: Locator;
  private userLastName: Locator;
  private userDOB: Locator;
  private userEmail: Locator;
  private userPhoneNo: Locator;
  private saveAndContinue: Locator;

  // constructor
  constructor(page: Page) {
    this.page = page;
    //
    this.userTitle = this.page.locator("label").filter({ hasText: "M." });
    this.userFirstName = this.page.getByRole("textbox", { name: "Prénom" });
    this.userLastName = this.page.getByRole("textbox", {name: "Nom",   exact: true,  });
    this.userDOB = this.page.getByRole("textbox", { name: "Date de naissance (JJ/MM/AAAA)",  });
    this.userEmail = this.page.getByRole("textbox", { name: "Adresse e-mail" });
    this.userPhoneNo = this.page.getByRole("textbox", { name: "Numéro de téléphone portable", });
    this.saveAndContinue = this.page.getByRole("button", { name: "Sauvegarder et Continuer", });
  }

  async fillContactInformation() {
    await this.userTitle.click();
    await this.userFirstName.fill("Martin");
    await this.userLastName.fill("Franc");
    await this.userDOB.fill("11112000");
    await this.userEmail.fill("martin@franc.com");
    await this.userPhoneNo.fill("0612345678");
    //
    await this.saveAndContinue.click();
  }
}
