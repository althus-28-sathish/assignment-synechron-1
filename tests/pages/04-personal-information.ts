import { Page, Locator } from "@playwright/test";

export class PersonalInformationPage {
  private page: Page;
  //
  private pers:Locator;
  //

  constructor(page: Page) {
    this.page = page;
    //
  }

  async fillPersonalDetails() {
    await this.pers.click();
  }
}
