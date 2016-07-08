import Ember from 'ember';
//import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.query( 'vehicle', params );
    },

    activate: function(){
        document.title = "Vehicles";
    },


} );