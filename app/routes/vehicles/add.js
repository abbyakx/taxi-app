import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    setupController: function( controller ){
        controller.set( 'vehicle', {
            plate_number: null,
            make: null,
            model: null
        } );
    },

} );
