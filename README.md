## Project Setup

The project is created with a default NextJs application with a Typescript template.

```bash
npx create-next-app --ts nextjs-template
cd nextjs-template
```

We're going to be using `yarn` for this project, but you could just as easily use NPM if you choose.

Run the following commands:

```
yarn install
yarn dev
```

You should see the demo app available on [http://localhost:3000](http://localhost:3000)

## Engine Locking

Install [NVM - Node Version Manager](https://github.com/nvm-sh/nvm).
We use NVM to make sure that all developers working on this project use the same Node engine and package manager.

- `.nvmrc` -- Defines which version of Node the project is using
- `.npmrc` -- Defines which package manager the project is using

We are using `Node v16 Gallium` and `yarn` for this project so we set those values like so:

`.nvmrc`

```.nvmrc
16.5.0
```

`.npmrc`

```
engine-strict=true
```

Note that the use of `engine-strict` doesn't specifically say anything about `yarn`, we do that in `package.json`:

`package.json`

```json
  "engines": {
    "node": ">=16.5.0",
    "yarn": ">=1.22.0",
    "npm": "Please use `yarn`."
  },
  ...
```

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed, we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

See `.eslintrc.json` and `prettierrc` files.

I recommend you get the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) so that VS Code can handle the formatting of the files for you and you don't need to rely on the command line tool. Having it installed and configured in your project means that VSCode will use your project's settings, so it's still necessary to add it here.

## Git Hooks

The project uses [Husky](https://typicode.github.io/husky/#/)

Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc.  We would like to be able to set certain conditions, and only allow things like commit and push to succeed if our code meets those conditions, presuming that it indicates our project is of acceptable quality.

See `pre-commit` and `pre-push` hooks in `.husky` directory.

These hooks ensures that we are not allowed to push to the remote repository unless our code can successfully build.

### Commit Message Convension

We use [Commitlint](https://github.com/conventional-changelog/commitlint). To lint commits before they are created and to ensure that every contributor to this project is following  a set of standard conventions for commit messages.

__IMPORTANT__  the following are the required commit message prefixes:

- `build:`  Changes that affect the build system or external dependencies (example - scopes: gulp, broccoli, npm)
- `ci:`  Changes to our CI configuration files and scripts (example - scopes  Travis, Circle, BrowserStack, SauceLabs)
- `docs:`  Documentation only changes
- `feat:`  A new feature
- `fix:`  A bug fix
- `perf:`  A code change that improves performance
- `refactor:`  A code change that neither fixes a bug nor adds a feature
- `style:`  Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test:`  Adding missing tests or correcting existing tests

See all the configurations for commitlint in `commitlint.config.js` file.

