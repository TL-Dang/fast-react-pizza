# Starting the project

### Step 1: Set up your development environment:select directory location and run 'npm create vite@latest' in the terminal.

### Step 2: Give app name (eg: fast-react-pizza) select React and them JavaScript as your templates.

### Step 3: While in the root folder of the project run 'npm i' in the terminal to install node, react, and reactDom files.

### Step 4: While in the root folder of the project run this code to configure eslint: 'npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev'

The '--save-dev' flag saves these dependencies as development.

//### Step 5: In root of project folder create '.eslintrc.json' configure file.

// ### Step 5: Last step should create '.eslintrc.cjs' file in the root of the project. Go to 'vite.config.js' in the root and put this at the top of the page: "import eslint from 'vite-plugin-eslint' "

// Both step 5's may not be necessary

### Step 6: While in the root folder of the project run this code to configure eslint: 'npm i react-router-dom'

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
