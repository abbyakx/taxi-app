import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.find( 'driver', params.driver_id );
    },

    setupController: function( controller, model ){
        controller.set( 'driver', model );

        controller.set('schedule',{
                day_of_week: null,
                driver_id: null,
                start_time: null,
                end_time: null

            })
    }


} );

