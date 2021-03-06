import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.find( 'driver', params.driver_id );
    },

    setupController: function( controller, model ){
        controller.set( 'driver', model );
        controller.store.query( 'schedule', { driver_id: model.id } ).then( function( schedules ){
            controller.set( 'schedule', schedules );
        } );
    }

} );

