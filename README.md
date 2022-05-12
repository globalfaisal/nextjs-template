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
- `.npmrc` - Defines which package manager the project is using

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