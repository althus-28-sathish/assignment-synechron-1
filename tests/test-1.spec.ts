import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo");
  await page.getByTestId("granular-banner-button-accept-all").click();
  await page.getByRole("link", { name: "Cartes Particuliers" }).click();
  await page
    .locator(
      ".cardList-modules__container___3K7ta > div > div:nth-child(2) > div > .sc_at_box_root"
    )
    .click();
  await page.getByRole("link", { name: "En savoir plus" }).nth(1).click();
  await page
    .locator("span")
    .filter({ hasText: /^Demandez votre Carte$/ })
    .getByRole("link")
    .click();
  await page.locator("label").filter({ hasText: "M." }).click();
  await page.getByRole("textbox", { name: "Prénom" }).fill("Camelle");
  await page.getByRole("textbox", { name: "Nom", exact: true }).fill("Martin");
  await page
    .getByRole("textbox", { name: "Date de naissance (JJ/MM/AAAA)" })
    .fill("02/02/2000");
  await page
    .getByRole("textbox", { name: "Adresse e-mail" })
    .fill("camelle@martin.com");
  await page
    .getByRole("textbox", { name: "Numéro de téléphone portable" })
    .fill("0612345678");

  await page.getByRole("textbox", { name: "Lieu de naissance" }).fill("Paris");
  await page.getByLabel("Département de naissance").selectOption("001");
  await page
    .getByRole("textbox", { name: "N°, type et nom de la voie de" })
    .fill("34 paris");
  await page
    .getByRole("textbox", { name: "N°, type et nom de la voie de" })
    .press("Tab");
  await page.getByRole("textbox", { name: "Code postal" }).fill("12345");
  await page.getByRole("textbox", { name: "Ville" }).fill("paris");
  await page.getByLabel("Statut résidentiel").selectOption("RENT");

  await page
    .getByRole("textbox", { name: "Code BIC / SWIFT" })
    .fill("EBATFRPPEB1");
  await page.getByLabel("Votre ancienneté bancaire").selectOption("0000");
  await page
    .getByRole("textbox", { name: "Montant de votre principale" })
    .fill("11111");
  await page.getByLabel("Estimation de votre").selectOption("50");
  await page.getByLabel("Catégorie socio-").selectOption("RETIRED");
  await page.getByLabel("Votre profession").selectOption("FORMER_MANAGER");

  await page
    .getByRole("textbox", { name: "Nom de jeune fille de votre m" })
    .fill("Camelle");
  await page
    .getByRole("textbox", { name: "Choisissez votre code PIN à 4" })
    .fill("1234");
  await page
    .getByRole("textbox", { name: "Confirmez votre code PIN" })
    .fill("1234");
  await page.goto("https://www.americanexpress.com/fr-fr/");
});
