// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDbTrKvLQpx-47qsptZfX9xZGFqxV5D5js',
    authDomain: 'drewisalegend.firebaseapp.com',
    databaseURL: 'https://drewisalegend.firebaseio.com',
    projectId: 'drewisalegend',
    storageBucket: 'drewisalegend.appspot.com',
    messagingSenderId: '111942410145',
    appId: '1:111942410145:web:26333d842d9c61056535e0'
  },
  apiOrigin: 'http://localhost:3333'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
