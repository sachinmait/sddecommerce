import { expect, test } from "@playwright/test";

test("program page renders key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /fullstackx/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /curriculum outline/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /register interest/i })).toBeVisible();
});
