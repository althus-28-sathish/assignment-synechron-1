import { test, expect } from "../fixtures/fixture.ts";

test.describe("Buy a Personal CC", async () => {
  //
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
  });

  // data supplied via JSON
  test("JSON Data", async ({
    page,
    homePage,
    contactInformationPage,
    personalInformationPage,
    finacialInformationPage,
    securityInformationPage,
    successPage,
  }) => {
    //
    await homePage.selectCardType();
    await contactInformationPage.fillContactInformation();
    await personalInformationPage.fillPersonalDetails();
    await finacialInformationPage.fillFinancialInformation();
    await securityInformationPage.fillSecurityInformation();
    await successPage.validateSuccessMessage();
    await successPage.closeApplication();
  });

  test("FAKER Data", async ({
    page,
    homePage,
    contactInformationPage,
    personalInformationPage,
    finacialInformationPage,
    securityInformationPage,
    successPage,
  }) => {});

  // data supplied via CSV
  test("using CSV", async ({
    page,
    homePage,
    contactInformationPage,
    personalInformationPage,
    finacialInformationPage,
    securityInformationPage,
    successPage,
  }) => {});
});
