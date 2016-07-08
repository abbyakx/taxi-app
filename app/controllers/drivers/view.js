import Ember from 'ember';

export default Ember.Controller.extend( {


    actions: {
        update: function(){
            var self = this;
            var driver = self.get( 'driver' )

            driver.save().then( function(){

                self.transitionToRoute( 'drivers' );
                // transition wherever

            } );
        }
    }
} );
