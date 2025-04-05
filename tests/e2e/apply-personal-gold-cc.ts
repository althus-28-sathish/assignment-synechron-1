import { test, expect } from "../fixtures/fixture.ts";
import data from "../support/data-json.json";

test.describe("Buy a Gold AE Card", async () => {
  //
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
  });

  test("sample", async ({
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
    //  to implement
  });

  test("FAKER Data", async ({
    page,
    homePage,
    contactInformationPage,
    personalInformationPage,
    finacialInformationPage,
    securityInformationPage,
    successPage,
  }) => {
    // to implement
  });

  // data supplied via CSV
  test("using CSV", async ({
    page,
    homePage,
    contactInformationPage,
    personalInformationPage,
    finacialInformationPage,
    securityInformationPage,
    successPage,
  }) => {
    // to implement
  });
});
