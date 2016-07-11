import Ember from 'ember';

export default Ember.Controller.extend( {

    scheduleTypes: [
        { label: 'Sunday', val: 0},
        { label: 'Monday', val: 1},
        { label: 'Tuesday', val: 2},
        { label: 'Wednesday', val: 3},
        { label: 'Thursday', val: 4},
        { label: 'Friday', val: 5},
        {label: 'Saturday', val: 6}
    ],

    actions: {
        update: function(){
            var self = this;
            var driver = self.get( 'driver' );
            driver.save().then( function(){
                self.transitionToRoute( 'drivers' );
                // transition wherever
            } );
        },

        addSchedule: function(){
            var self = this;
            console.log( self.get( 'schedule.day_of_week' ) );
            var newSchedule = self.store.createRecord( 'Schedule',
                {
                    driver_id: self.get( 'driver.id' ),
                    day_of_week: self.get( 'schedule.day_of_week' ),
                    start_time: self.get( 'schedule.start_time' ),
                    end_time: self.get( 'schedule.end_time' )
                } );
            newSchedule.save().then(
                function(){
                    self.transitionToRoute( 'drivers' );
                    // transition wherever
                }
            )
        }
    }
} );
