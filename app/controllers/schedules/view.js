import Ember from 'ember';

export default Ember.Controller.extend( {



    actions: {
        update: function(){
            var self = this;
            var schedule = self.get( 'schedule' );
            schedule.save().then( function(){
                self.transitionToRoute( 'schedules' );
                // transition wherever
            } );
        }
    }
} );
