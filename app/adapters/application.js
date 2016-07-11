/**
 * Created by abby on 7/6/16.
 */
import DS from 'ember-data';
import config from 'taxi-app/config/environment';

export default DS.RESTAdapter.extend( {
    host: config.APP.api_host,
    namespace: '',

    shouldReloadAll: function() {
        return false;
    },
    shouldBackgroundReloadRecord: function() {
        return true;
    },
    //ajaxError: function( jqXHR ){
    //    var error = this._super( jqXHR );
    //    return error;
    //}


} );

