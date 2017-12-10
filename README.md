# angular-parcel
> Boilerplate [Angular](https://angular.io/) application bundled with [Parcel](https://parceljs.org/).

This repo servers as a starting point to quickly get an Angular application with [TypeScript](https://www.typescriptlang.org/) running using the Parcel web application bundler. 

# Getting Started

## Dependencies
Required tools:
 - `npm` and `parcel-bundler`
 
 ## Installing
 - `fork` this repo
 - `clone` your fork
 - `cd` into `src` directory
 - `npm install` to install dependencies
 
 ## Running the Application
 angular-parcel uses `npm` tasks to build and run the application. Once the dependencies are installed, you may run the app. Running `npm start` will transpile the TypeScript into ES6 JavaScript and bundle the application with `parcel`, launch a development server at [http://localhost:1234/](http://localhost:1234/), and watch all files for changes.
 
 Note - You must be in the `src` directory to run these tasks.
 
 ### Tasks
 - `npm run build`
      - compiles the Angular application's TypeScript into JavaScript in the `ClientApp/dist` directory.
 - `npm run watch`
      - runs the TypeScript compiler in watch mode to support parcel's hot module replacement.
 - `npm run serve`
      - bundles the application with the `parcel-bundler`. Uses `ClientApp/index.html` as an entry point. Starts a development server at [http://localhost:1234/](http://localhost:1234/).
 - `npm run start`
      - Builds the application using `npm run build`, and then uses [`concurrently`](https://www.npmjs.com/package/concurrently) to both watch the TypeScript for changes (`npm run watch`) and rebundle (`npm run serve`). 
