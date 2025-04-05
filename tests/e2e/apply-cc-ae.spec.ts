import { test, expect } from "../fixtures/fixture.ts";

test.describe("order-items", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
    page.on("dialog", (dialog) => dialog.dismiss());
  });

  test("buy a personal card", async ({
    page,
    homePage,
    personalCardsPage,
    userDetailsPage,
  }) => {
    await homePage.selectCardType();
    await personalCardsPage.selectCardType();
    await userDetailsPage.fillUserPersonalDetails();
  });
});
