import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.find( 'schedule', params.schedule_id );
    },

    setupController: function( controller, model ){
        controller.set( 'schedule', model );
        controller.store.query('vehicle', {id: model.vehicle_id}).then(function(vehicle){
            controller.set('vehicle', vehicle);
        });
    }


} );

