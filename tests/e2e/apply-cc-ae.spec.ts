import { test, expect } from "../fixtures/fixture.ts";

test.describe("Buy a Personal CC", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
  });

  test("FAKER Data", async ({
    page,
    homePage,
    personalCardsPage,
    userDetailsPage,
  }) => {
    await page.waitForTimeout(5000);
    await page.waitForSelector('//button[contains(text(),"Tout Accepter")]');
    await page.getByRole("button", { name: "Tout Accepter" }).click();
    //
    // page.on("dialog", (dialog) => dialog.accept());
    await homePage.selectCardType();
    // await page.getByRole("button", { name: "Tout Accepter" }).click();
    await personalCardsPage.selectCardType();
    await userDetailsPage.fillUserPersonalDetails();
  });

  // data supplied via JSON
  test("JSON Data", async ({
    page,
    homePage,
    personalCardsPage,
    userDetailsPage,
  }) => {
    await page.waitForTimeout(5000);
    await page.waitForSelector('//button[contains(text(),"Tout Accepter")]');
    await page.getByRole("button", { name: "Tout Accepter" }).click();
    //
    // page.on("dialog", (dialog) => dialog.accept());
    await homePage.selectCardType();
    // await page.getByRole("button", { name: "Tout Accepter" }).click();
    await personalCardsPage.selectCardType();
    await userDetailsPage.fillUserPersonalDetails();
  });

  // data supplied via CSV
  test("using CSV", async ({
    page,
    homePage,
    personalCardsPage,
    userDetailsPage,
  }) => {});
});
