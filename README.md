# angular-parcel
> Boilerplate [Angular](https://angular.io/) application bundled with [Parcel](https://parceljs.org/).

This repo servers as a starting point to quickly get an Angular application with [TypeScript](https://www.typescriptlang.org/) and [Bootstrap](http://getbootstrap.com/) running using the Parcel web application bundler. 

# Getting Started

## Dependencies
Required tools:
 - `yarn`
 
 ## Installing
 - `fork` this repo
 - `clone` your fork
 - `yarn install` to install dependencies
 
 ## Running the Application
angular-parcel uses `yarn` to run package scripts to build and run the application. Once the dependencies are installed, you may run the app. You can either run the application in development mode (using Parcel's development server), or in production mode (using `express`).
 
 ### Development Mode
 `yarn start`
 
 ### Production Mode
 `yarn run release`
 
 ### Scripts
 - `yarn run devServe`
      - bundles the application with the `parcel-bundler`. Uses `index.html` as an entry point. Starts a development server at [http://localhost:1234/](http://localhost:1234/).
 - `yarn run start`
      - alias for `yarn run devServe`
 - `yarn run prodBuild`
      - runs a production build using parcel into the `release` directory.
 - `yarn run prodServe`
      - uses node to start `sever.js`, which serves the `release` directory at [http://localhost:8000](http://localhost:8000).
 - `yarn run release`
      - runs `yarn run prodBuild`, then `yarn run prodServe`.
 - `yarn run clean`
      - removes parcel's `.cache/`, `dist/`, and `release/` directories.

# Setup for Heroku
angular-parcel is setup to be deployed on a Heroku dyno out of the box. Just follow the deploy directions on Heroku. Parcel will run a production build and start the express server on the dyno!