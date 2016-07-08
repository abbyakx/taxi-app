import Ember from 'ember';

export default Ember.Controller.extend( {
    drivers: null,

    actions: {
        save: function(){
            var self = this;
            var newDriver = self.store.createRecord( 'Driver',
                {
                    first_name: self.get( 'driver.first_name' ),
                    last_name: self.get( 'driver.last_name' ),
                    license_number: self.get( 'driver.license_number' )
                } );

            newDriver.save().then( function(){

                self.transitionToRoute( 'drivers' );
                // transition wherever

            } );
        }
    }
} );
