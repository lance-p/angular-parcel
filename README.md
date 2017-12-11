# angular-parcel
> Boilerplate [Angular](https://angular.io/) application bundled with [Parcel](https://parceljs.org/).

This repo servers as a starting point to quickly get an Angular application with [TypeScript](https://www.typescriptlang.org/) and [Bootstrap](http://getbootstrap.com/) running using the Parcel web application bundler. 

# Getting Started

## Dependencies
Required tools:
 - `npm`
 
 ## Installing
 - `fork` this repo
 - `clone` your fork
 - `cd` into `src` directory
 - `npm install` to install dependencies
 
 ## Running the Application
 angular-parcel uses `npm` tasks to build and run the application. Once the dependencies are installed, you may run the app. Running `npm start` will bundle the application with `parcel`, launch a development server at [http://localhost:1234/](http://localhost:1234/), and watch all files for changes.
 
 Note - You must be in the `src` directory to run these tasks.
 
 ### Tasks
 - `npm run serve`
      - bundles the application with the `parcel-bundler`. Uses `index.html` as an entry point. Starts a development server at [http://localhost:1234/](http://localhost:1234/).
 - `npm run start`
      - alias for `npm run server`
