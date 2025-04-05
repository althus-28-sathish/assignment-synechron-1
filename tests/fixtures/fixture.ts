import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home-page.ts";
import { PersonalCardsPage } from "../pages/personal-cards.ts";
import { UserDetailsPage } from "../pages/user-page.ts";

// fixtures
type MyFixtures = {
  homePage: HomePage;
  personalCardsPage: PersonalCardsPage;
  userDetailsPage: UserDetailsPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  personalCardsPage: async ({ page }, use) => {
    await use(new PersonalCardsPage(page));
  },
  userDetailsPage: async ({ page }, use) => {
    await use(new UserDetailsPage(page));
  },
});
export { expect } from "@playwright/test";
