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
        },

        addSchedule: function(){
            var self = this;
            console.log(self.get('schedule'));

            var newSchedule = self.store.createRecord( 'Schedule',
                {
                    driver_id : self.get('driver.id'),
                    day_of_week: self.get( 'schedule.day_of_week' ),
                    start_time: self.get( 'schedule.start_time' ),
                    end_time: self.get('schedule.end_time')
                } );


            console.log(newSchedule);


            newSchedule.save().then(
                function(){
                    self.transitionToRoute( 'drivers' );
                    // transition wherever
                }
            )


        }
    }
} );
