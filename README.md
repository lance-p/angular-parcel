# angular-parcel
> Boilerplate [Angular](https://angular.io/) application bundled with [Parcel](https://parceljs.org/).

This repo servers as a starting point to quickly get an Angular with [TypeScript](https://www.typescriptlang.org/) running using the Parcel web application bundler. 

# Getting Started

## Dependencies
Required tools:
 - `npm` and `parcel`
 
 ## Installing
 - `fork` this repo
 - `clone` your fork
 - `npm install` to install dependencies
 
 ## Running the Application
 angular-parcel uses `npm` tasks to build and run the application. Once the dependencies are installed, you may run the app. Running `npm start` will transpile the TypeScript into ES5 JavaScript and bundle the application with `parcel`, launch a development server at [http://localhost:1234/](http://localhost:1234/), and watch all files.
 
 ### Tasks
 - `npm run build`
      - runs `tsc`, which compiles all TypeScript into ES5 JavaScript, and output the files to `src/build/`.
 - `npm run watch`
      - runs `tsc -w`. This will watch all TypeScript files and compile them when they change.
 - `npm run serve`
      - runs `parcel app/index.html`. This bundles the application using `index.html` as an entry point, and starts a development server at [http://localhost:1234/](http://localhost:1234/).
 - `npm run start`
       - Builds the application using `npm run build`, and then uses [`concurrently`](https://www.npmjs.com/package/concurrently) to both watch the TypeScript for changes (`npm run watch`) and rebundle (`npm run serve`). 
