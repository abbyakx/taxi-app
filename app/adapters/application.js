/**
 * Created by abby on 7/6/16.
 */
import DS from 'ember-data';
import config from './config/environment';

export default DS.RESTAdapter.extend( {
    host: config.APP.api_host,
    namespace: ''

    //ajaxError: function( jqXHR ){
    //    var error = this._super( jqXHR );
    //    return error;
    //}

} );