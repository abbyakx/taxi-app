/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'taxi-app',
    //environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created

      'api_host': 'http://localhost:3000'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",

      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    }


  };



  return ENV;
};
