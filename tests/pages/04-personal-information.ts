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
  //
  private saveAndContinue:Locator;

  constructor(page: Page) {
    this.page = page;
    //
    this.birthName = this.page.getByRole('textbox',{name:'Nom de naissance'});
    this.placeOfBirth = this.page.getByRole('textbox',{name:'Lieu de naissance'});
    this.departmenOfBirth = this.page.getByRole('listbox',{name:'Département de naissance'});
    this.countryOfBirth = this.page.getByRole('listbox',{name:'Pays de naissance'});
    this.nationality = this.page.getByRole('listbox',{name:'Nationalité (Pays)'});
    this.addressTeritory = this.page.getByRole('listbox',{name:'Pays ou Territoires'});
    this.addressStreet = this.page.getByRole('textbox',{name:'N°, type et nom de la voie de votre résidence principale'});
    this.addressPostalCode = this.page.getByRole('textbox',{name:'Code postal'});
    this.addressTown = this.page.getByRole('textbox',{name:'Ville'});
    this.addressResidentialStatus =  this.page.getByRole('listbox',{name:'Statut résidentiel'});
    //
    this.saveAndContinue=this.page.getByRole('button',{name:'Sauvegarder et Continuer'});

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
