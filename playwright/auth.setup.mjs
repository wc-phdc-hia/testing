/* eslint-disable prettier/prettier */
import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
	try {
		await page.goto(process.env.PLAYWRIGHT_URL);
		await page.getByLabel("Local").check();
		await page.getByPlaceholder("Enter your user name").click();
		await page
			.getByPlaceholder("Enter your user name")
			.fill(process.env.PLAYWRIGHT_LOGINUSERNAME);
		await page.getByPlaceholder("Enter your password").click();
		await page
			.getByPlaceholder("Enter your password")
			.fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
		await page.getByRole("button", { name: "Sign in to SPV" }).click();
		await page.context().storageState({ path: authFile });

		// An alternative if logging in for the first time and a new password needs to be set
		const invalidCredentialsMessage = await page.textContent("li");
		if (invalidCredentialsMessage === "Invalid username or password.") {
			await page.getByPlaceholder("Enter your password").click();
			await page
				.getByPlaceholder("Enter your password")
				.fill(process.env.PLAYWRIGHT_INITIALLOGINPASSWORD);
			await page.getByLabel("Local").check();
			await page.getByRole("button", { name: "Sign in to SPV" }).click();

      if ((await page.url()) === "http://localhost:5380/Search") {
        // Proceed with password reset and authentication
			await page.getByPlaceholder("Enter new password").click();
			await page
				.getByPlaceholder("Enter new password")
				.fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
			await page.getByPlaceholder("Confirm new password").click();
			await page
				.getByPlaceholder("Confirm new password")
				.fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
			await page.getByRole("button", { name: "Reset Password" }).click();
			await page
				.getByPlaceholder("Enter your user name")
				.fill(process.env.PLAYWRIGHT_LOGINUSERNAME);
			await page.getByPlaceholder("Enter your password").click();
			await page
				.getByPlaceholder("Enter your password")
				.fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
			await page.getByRole("button", { name: "Sign in to SPV" }).click();
		}

			if (invalidCredentialsMessage === "Invalid username or password.") {
				await page.getByPlaceholder("Enter your user name").click();
				await page
					.getByPlaceholder("Enter your user name")
					.fill(process.env.PLAYWRIGHT_CHANGEUSERUSERNAME);
				await page.getByPlaceholder("Enter your password").click();
				await page
					.getByPlaceholder("Enter your password")
					.fill(process.env.PLAYWRIGHT_CHANGEUSERPASSWORD);
				await page.getByLabel("Local").check();
				await page.getByRole("button", { name: "Sign in to SPV" }).click();
			}
    }

		// Wait for Terms of Use page
		try {
			if (
				await page
					.locator("h2.kt-portlet__head-title.term-conditions-header")
					.isVisible()
			) {
				await page.getByRole("button", { name: "Accept and Continue" }).click();
				await page.context().storageState({ path: authFile });
				await page.close();
			}
		} catch {
			// If not on Terms of Use, check for login panel again
			if (await page.getByPlaceholder("Enter your user name").isVisible()) {
				await page
					.getByPlaceholder("Enter your user name")
					.fill(process.env.PLAYWRIGHT_LOGINUSERNAME);
				await page
					.getByPlaceholder("Enter your password")
					.fill(process.env.PLAYWRIGHT_LOGINPASSWORD);
				await page.getByRole("button", { name: "Sign in to SPV" }).click();
				await page.getByRole("button", { name: "Accept and Continue" }).click();
				await page.context().storageState({ path: authFile });
				await page.close();
			} else if ((await page.url()) === "http://localhost:5380/Search") {
				// If on search page, continue
				await page.context().storageState({ path: authFile });
				await page.close();
			} else {
				// If not on expected page, fail the test
				throw new Error("Unexpected page after login");
			}
		}
	} catch (error) {
		console.error("Error during authentication process:", error);
	}

	await page.context().storageState({ path: authFile });
	await page.close();
});