// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBdkwfJMH_1T9jDym7mkCN5CAjKB0XYrq8",
    authDomain: "ng-fitness-tracker-3b6b3.firebaseapp.com",
    databaseURL: "https://ng-fitness-tracker-3b6b3.firebaseio.com",
    projectId: "ng-fitness-tracker-3b6b3",
    storageBucket: "ng-fitness-tracker-3b6b3.appspot.com",
    messagingSenderId: "53442724685"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
