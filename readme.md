#  Reactron
`reactron` is a boilerplate program that lets you rapidly prototype web apps built using electron, react, and redux. It is great for learning since it leaves a lot of room for further customization.

## Start
To start using this code
1. Ensure you have the latest version of nodejs/npm installed
2. Open a console and enter "npm install"
3. Open a console and enter "npm run-script watch"
4. Open another console and enter "npm start"
5. HMR should be working, in which case any changes to the code (that have nothing to do with package.json or webpack.config.js) will be reflected instantly in the runtime.

To run the code in the future, you only need to run steps 3 and 4.

## Development Rules
1. Four levels of components: 1) shared components, 2) modules, 3) module components, 4) external components. File structure must be maintained.
2. Shared components are not connected to redux store. They receive props from parents. They can be used in any module or module component.
3. Modules are container components that control layout and data flow of child components. They are connected to Redux store, and are not allowed to contain styling except under exceptional circumstances.
4. Module components share the same properties of shared components, except that they are only accessible and used by their parent module.
5. External components are those originating from node modules, such as Material-UI components. They can be used anywhere.
6. React.PropTypes checking is MANDATORY for shared components and RECOMMENDED for all other components.
7. SetState is only for UI animations (e.g. when using `react-motion`).

## DevTools
In order to use devtool extensions in electron, follow this link: https://github.com/electron/electron/blob/master/docs/tutorial/devtools-extension.md
Currently, only Redux DevTools is working.