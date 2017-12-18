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
 - `npm install` to install dependencies
 
 ## Running the Application
angular-parcel uses `npm` tasks to build and run the application. Once the dependencies are installed, you may run the app. You can either run the application in development mode (using Parcel's development server), or in production mode (using `http-server`).
 
 ### Development Mode
 `npm start`
 
 ### Production Mode
 `npm run prod`
 
 ### Tasks
 - `npm run serve`
      - bundles the application with the `parcel-bundler`. Uses `index.html` as an entry point. Starts a development server at [http://localhost:1234/](http://localhost:1234/).
 - `npm run start`
      - alias for `npm run server`
 - `npm run build`
      - runs a production build using parcel into the `release` directory.
 - `npm run prod`
      - runs `npm run build`, and starts an `http-server` instance in the `release` directory at [http://localhost:8080/](http://localhost:8080/).
