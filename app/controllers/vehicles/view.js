import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        delete: function(){
            var self = this;
            var vehicle = self.get( 'vehicle' );
            vehicle.status = 1;

            vehicle.save().then( function(){

                self.transitionToRoute( 'vehicle' );
                // transition wherever

            } );
        }
    }

} );
