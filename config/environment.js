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
    }
  };



  return ENV;
};
