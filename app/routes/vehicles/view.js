import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    model: function( params  ){

        return this.store.find('vehicle', params.vehicle_id);
    },

    setupController: function( controller, model ){
        controller.set( 'vehicle', model );
    }


} );

