import Ember from 'ember';

export default Ember.Controller.extend( {
    schedule: null,

    actions: {
        save: function () {

            var self = this;
            var newVehicle= self.store.createRecord( 'Vehicle',
                {
                    plate_number: self.get('vehicle.plate_number'),
                    make: self.get('vehicle.make'),
                    model: self.get('vehicle.model')
                });
            newVehicle.save().then(function () {

                self.transitionToRoute('vehicles');
                // transition wherever

            });
        }
    }


} );
