# Testing <!-- omit in toc -->

- [Getting started](#getting-started)
  - [Dependencies (Windows)](#dependencies-windows)
- [Resources](#resources)
  - [Regression test](#regression-test)
  - [Setting up SSH for Github](#setting-up-ssh-for-github)
- [Visual Studio Code plugins](#visual-studio-code-plugins)

## Getting started

After the dependencies are installed, run:

```sh
npm ci
```

To run codegen (please see the [test generator docs](https://playwright.dev/docs/codegen)):

```sh
npm run codegen
```

> **Note:** Everything that can be run as `npx ...` in the docs can be run as a script in the `package.json` file. This method is preferred as it keeps versions and dependencies isolated. A script can be run with `npm run <scriptname>`, which is what is being done with `npm run codegen` and `npm run test`.

To run a test suite:

```sh
npm run test
```

To run a specific test file:

```sh
npx playwright test <name-of-test-file>
```

To run tests in headed state:

```sh
npm run test-h || npx playwright test <name-of-test-file> --headed
```

> **Note:** If you're asked to provide a firewall permission on first run, allow on local networks only.

### Dependencies (Windows)

In this order:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Nodejs](https://nodejs.org/en/) - please install the LTS version with the C++ build tools. This may install chocolatey as well -- you can check by typing `choco` into your console. If there is no error saying it cannot find the command, then it is installed. To install, open a Powershell terminal as adminstrator and run:

    ```ps
    Set-ExecutionPolicy AllSigned
    ```

  then go to the folder where you downloaded the installer file and enter:
  
   ```ps
   .\<name-of-install-file>
   ```

- [Git bash](https://git-scm.com/download/win): Please follow the installation instructions in the [Ways of Working](https://github.com/wc-phdc-hia/ways-of-working/blob/main/src/standards/development.md#windows) repository. There are a couple of gotchas here.
- Search for PowerShell and "Run as Administrator" and install chocolatey [chocolatey](https://chocolatey.org/install) if it hasn't been installed yet (if all has gone well with the `node` installation it should be installed).
- Use chocolatey to install [make](https://community.chocolatey.org/packages/make)
- [Set up an SSH key](#setting-up-ssh-for-github).
- Clone the repo:
  
  ```sh
  git clone git@github.com:wc-phdc-hia/testing.git
  ```

- To get the latest Playwright run:
  
  ```sh
  npm install -D @playwright/test@latest
  ```

- A package for setting environment variables:
  
  ```sh
  npm install -D env-cmd
  ```
  
>**Important:** Create a .env file in the root folder that will contain your local SPV username and password. i.e. USERNAME="username here", PASSWORD="password here"

## Resources

[Playwright](https://playwright.dev/docs/intro)

### Regression test

Prerequisite

- All values in .env file  should not be empty.
Steps
Run below scripts one by one

- Run `npm run playwright-tests-search`
- Run `npm run playwright-tests-labs`
- Run `npm run playwright-tests-Medicines`,
- Run `npm run playwright-tests-AddUser`,
- Run `npm run playwright-tests-ChangePwd`,
- Run `npm run playwright-tests-DeletePatient`,
- Run `npm run playwright-tests-DeletePatientViaPatientAdmin`,
- Run `npm run playwright-tests-EditUser`,
- Run `npm run playwright-tests-EditPatient`,
- Run `npm run playwright-tests-DeleteUser`,
- Run `npm run playwright-tests-FollowUp`,
- Run `npm run playwright-tests-LoginAfterResetPwd`,
- Run `npm run playwright-tests-SearchUserByDiffFilters`

### Setting up SSH for Github

Setting up an SSH key:

- [Generating an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adding an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
  
## Visual Studio Code plugins

Install the following plugins, either from the plugin panel on the activity bar (by default on the left):

- [gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

