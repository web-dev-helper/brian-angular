// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  useFirebase: true,
  firebase: {
    apiKey: "AIzaSyBksI-8rwj-O_5jToDSzcM0-GEmvcTOPqY",
    authDomain: "brian-angular-one.firebaseapp.com",
    databaseURL: "https://brian-angular-one.firebaseio.com",
    projectId: "brian-angular-one",
    storageBucket: "brian-angular-one.appspot.com",
    messagingSenderId: "234114407464"
  }
};
