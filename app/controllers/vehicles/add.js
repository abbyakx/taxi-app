import Ember from 'ember';

export default Ember.Controller.extend( {

    actions: {
        createVehicle: function(){
            var self = this;
            var newVehicle = self.store.createRecord( 'Vehicle', {
                plate_number: self.get( 'vehicle.plate_number' ),
                make: self.get( 'vehicle.make' ),
                model: self.get( 'vehicle.model' )
            } );
            self.set( 'isLocked', true );
            newVehicle.save().then(
                function(){
                    self.set( 'isLocked', false );
                    self.transitionToRoute( 'vehicles' );
                }
            )
        }
    }


} );
