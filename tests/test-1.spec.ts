import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
  await page.getByTestId("granular-banner-button-accept-all").click();
  await page.goto(
    "https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021"
  );
  await page.getByRole("link", { name: "En savoir plus" }).nth(1).click();
  await page
    .locator("#pdp-side-railwrapper")
    .getByRole("link", { name: "Demandez votre Carte" })
    .click();
  await page.locator("label").filter({ hasText: "M." }).click();
  await page.getByRole("textbox", { name: "Prénom" }).fill("Franc");
  await page.getByRole("textbox", { name: "Prénom" }).press("Tab");
  await page.getByRole("textbox", { name: "Nom", exact: true }).fill("Martin");
  await page
    .getByRole("textbox", { name: "Date de naissance (JJ/MM/AAAA)" })
    .fill("11/12/2001");
  await page
    .getByRole("textbox", { name: "Adresse e-mail" })
    .fill("franc.mart@fmartin.com");
  await page
    .getByRole("textbox", { name: "Numéro de téléphone portable" })
    .fill("0633333333");
  await page.getByLabel("Département de naissance").selectOption("018");
  await page
    .getByRole("textbox", { name: "N°, type et nom de la voie de" })
    .fill("any address");
  await page.getByRole("textbox", { name: "Code postal" }).fill("12344");
  await page.getByRole("textbox", { name: "Ville" }).fill("peres");
  await page.getByLabel("Statut résidentiel").selectOption("RENT");
  await page
    .getByRole("textbox", { name: "IBAN" })
    .fill("FR1420041010050500013M02606");
  await page
    .getByRole("textbox", { name: "Code BIC / SWIFT" })
    .fill(" SWIFT Code");
  await page
    .getByRole("textbox", { name: "Code BIC / SWIFT" })
    .press("ControlOrMeta+a");
  await page.getByLabel("Votre ancienneté bancaire").selectOption("0100");
  await page
    .getByRole("textbox", { name: "Montant de votre principale" })
    .fill("111111");
  await page.getByLabel("Estimation de votre").selectOption("50");
  await page.getByLabel("Catégorie socio-").selectOption("FARMER_OPERATORS");
  await page
    .getByLabel("Votre profession")
    .selectOption("CIVILIAN_EMPLOYEE_SERVICE_AGENT_OF_THE_FUNCTION_PUBLIC");
  await page
    .getByLabel("Votre secteur d'activité")
    .selectOption("CONSTRUCTION");
  await page
    .getByRole("textbox", { name: "Nom de votre employeur / soci" })
    .fill("Employers");
  await page.getByLabel("Ancienneté professionnelle").selectOption("0100");
  await page
    .getByRole("textbox", { name: "Nom de jeune fille de votre m" })
    .fill("AAEAFRP1");
  await page
    .getByRole("textbox", { name: "Choisissez votre code PIN à 4" })
    .fill("1234");
  await page
    .getByRole("textbox", { name: "Confirmez votre code PIN" })
    .fill("1234");
  await page.goto("https://www.americanexpress.com/fr-fr/");
  await page.goto("https://www.americanexpress.com/fr-fr/");
});
