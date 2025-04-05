import { Page, Locator } from "@playwright/test";

export class PersonalInformationPage {
  private page: Page;
  //
  private birthName:Locator;
  private placeOfBirth:Locator;
  private departmenOfBirth:Locator;
  private countryOfBirth:Locator;
  private nationality:Locator;
  private addressTeritory:Locator;
  private addressStreet:Locator;
  private addressPostalCode:Locator;
  private addressTown:Locator;
  private addressResidentialStatus:Locator;
  private saveAndContinue:Locator;
  //

  constructor(page: Page) {
    this.page = page;
    //
    this.birthName = this.page.getByRole('textbox',{name:'Nom de naissance'});
    this.placeOfBirth = this.page.getByRole('textbox',{name:'Lieu de naissance'});
    this.departmenOfBirth = this.page.getByRole('combobox',{name:'Département de naissance'});
    this.countryOfBirth = this.page.getByRole('combobox',{name:'Pays de naissance'});
  }

  async fillPersonalDetails() {
    this.page.on('dialog',(dialog)=>dialog.accept());
    await this.birthName.fill("Martin");
    await this.placeOfBirth.fill("Paris");
    await this.departmenOfBirth.selectOption({index:1});
    await this.countryOfBirth.selectOption({index:1});
    await this.nationality.selectOption({index:1});
    await this.addressTeritory.selectOption({index:1});
    await this.addressStreet.fill("Clock Tower Street");
    await this.addressPostalCode.fill("12345");
    await this.addressTown.fill('Paris');
    await this.addressResidentialStatus.selectOption({index:3});
    //
    await this.saveAndContinue.click();
  }
}
