import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    setupController: function( controller ){
        controller.set( 'driver', {
            first_name: null,
            last_name: null,
            license_number: null
        } );


    },


} );
/**
 * Created by abby on 7/7/16.
 */
