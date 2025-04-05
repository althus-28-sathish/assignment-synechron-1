import { test as base } from "@playwright/test";
import { HomePage } from "../pages/01-home-page.ts";
import { CardSelectionPage } from "../pages/02-card-selection.ts";
import { ContactInformationPage } from "../pages/03-contact-information.ts";
import { PersonalInformationPage } from "../pages/04-personal-information.ts";
import { FinancialInformationPage } from "../pages/05-financial-information.ts";
import { SecurityInformationPage } from "../pages/06-security-information.ts";
import { SuccessPage } from "../pages/07-success-page.ts";

// fixtures
type MyFixtures = {
  homePage: HomePage;
  cardSelectionPage: CardSelectionPage;
  contactInformationPage: ContactInformationPage;
  personalInformationPage: PersonalInformationPage;
  finacialInformationPage: FinancialInformationPage;
  securityInformationPage: SecurityInformationPage;
  successPage: SuccessPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  cardSelectionPage: async ({ page }, use) => {
    await use(new CardSelectionPage(page));
  },
  contactInformationPage: async ({ page }, use) => {
    await use(new ContactInformationPage(page));
  },
  personalInformationPage: async ({ page }, use) => {
    await use(new PersonalInformationPage(page));
  },
  finacialInformationPage: async ({ page }, use) => {
    await use(new FinancialInformationPage(page));
  },
  securityInformationPage: async ({ page }, use) => {
    await use(new SecurityInformationPage(page));
  },
  successPage: async ({ page }, use) => {
    await use(new SuccessPage(page));
  },
});
export { expect } from "@playwright/test";
