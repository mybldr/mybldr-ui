# @mybldrrui

This repository houses an MUI-wrapper that is used as the base component library for myBLDR, and the various front-ends integrating with myBLDR.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
npm install;
```

Running this command will install packages at the root level (for the monorepo) and also install the packages for the `package` and `storybook` directories.

After installing the necessary dependencies, try building a version of the package locally. This will create a `dist` folder in the package directory, which contains the built version of the package.

```bash
cd package;
npm run rollup;
```

Next, using the [NPM Link](https://docs.npmjs.com/cli/v8/commands/npm-link) command, link the package to your local NPM cache:

```bash
cd package;
npm link;
cd ../storybook;
npm link mybldr-ui;
```

Now, you can run the Storybook server to view the components in action:

```bash
cd storybook;
npm run storybook;
```

This will start a local server, and you can view the components in your web browser at `http://localhost:6006/`.

## Contributing

We welcome contributions to the project! If you have any ideas, suggestions, or bug fixes, please feel free to open an issue or submit a pull request.
