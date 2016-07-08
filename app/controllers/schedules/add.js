import Ember from 'ember';

export default Ember.Controller.extend( {
    schedule: null,

    //actions: {
    //    save: function () {
    //        var self = this;
    //        var newVehicle= self.store.createRecord( 'Vehicle',
    //            {
    //                day_of_week: self.get('vehicle.plate_number'),
    //                start_time: self.get('vehicle.make'),
    //                end_time: self.get('vehicle.model')
    //            });
    //        newVehicle.save().then(function () {
    //
    //            self.transitionToRoute('vehicles');
    //            // transition wherever
    //
    //        });
    //    }
    //}
} );
