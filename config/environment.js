/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-quickstart',
    environment: environment,
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com api.travis-ci.org travis-ci.org",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com api.travis.org",
      "object-src": "'self' travis-ci.org",
      "style-src": "'self' 'unsafe-inline'"
    },
    firebase: {
      apiKey: 'AIzaSyDox25Gx5f-2Vkh_E0o4i-PhR10hYSrIog',
      authDomain: 'emberjs-946ad.firebaseapp.com',
      databaseURL: 'https://emberjs-946ad.firebaseio.com',
      storageBucket: 'emberjs-946ad.appspot.com',
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
