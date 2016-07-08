import Ember from 'ember';

export default Ember.Controller.extend( {
    schedule: null,

    actions: {
        save: function(){
            var self = this;
            var newSchedule = self.store.createRecord( 'Schedule',
                {
                    driver_id: self.get( 'schedule.driver_id' ),
                    day_of_week: self.get( 'schedule.day_of_week' ),
                    start_time: self.get( 'schedule.start_time' ),
                    end_time: self.get('schedule.end_time')
                } );
            console.log( self.get( 'schedule.driver_id' ) );
            newSchedule.save().then( function(){

                self.transitionToRoute( 'drivers' );
                // transition wherever

            } );
        }
    }
} );
