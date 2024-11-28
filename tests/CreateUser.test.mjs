import { test } from "@playwright/test";
import { CreateUser } from "../playwright/Functions/CreateUser.mjs";

// Test Case
test("Create a new user", async ({ page }, testInfo) => {
	await CreateUser(page);
	const screenshot = await page.screenshot();
	await testInfo.attach("CreateUser test screenshot", {
		body: screenshot,
		contentType: "image/png",
	});
});
