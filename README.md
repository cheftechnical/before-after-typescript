# With & Without Typescript

This package contains two React applications, one uses Typescript and the other does not. Both applications are
functionally identical.

The purpose of this project is to illustrate the differences between Typescript and vanilla JavaScript.

Some design notes:

- Both applications are based on the Material UI design system
- To use the apps, you only need to follow the **installation** instructions and navigate to the correct address in your
  browser. The console will provide the correct URL.
- Each application will run on a unique port, so you can run both of them at the same time
- The *Building from scratch* section lists the commands I used to create the project, and are for reference only.
  Running the installation instructions is enough for a working prototype.
- For simplicity, I only added Storybook to the version with Typescript
- I also omitted form validation for simplicity, but I'd *highly* recommend `react-hook-form`. I use it on
  simonyates.ca, and it's the best!

---

## With Typescript

#### Installation:

```bash
cd with-typescript/my-app/
yarn install
```

#### Building from scratch (reference only):

```bash
yarn create react-app my-app --template typescript
yarn add @material-ui/core
yarn add react-router-dom
yarn add @types/react-router-dom --dev
yarn add @material-ui/icons
yarn add uuidv4
```

### Adding Storybook

```bash
npx sb init
```

### Usage

#### To start the application:

```bash
yarn start
```

#### To start storybook:

```bash
yarn storybook
```

---

## Without Typescript

#### Installation:

```bash
cd without-typescript/my-app/
yarn install
```

#### Building from scratch (reference only):

```bash
yarn create react-app my-app
yarn add @material-ui/core
yarn add react-router-dom
yarn add @material-ui/icons
yarn add uuidv4
```

### Usage

#### To start the application:

```bash
yarn start
```

---

## References

- Official Setup instructions by Facebook: https://create-react-app.dev/docs/adding-typescript/
