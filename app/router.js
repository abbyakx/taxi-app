import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend( {
    location: config.locationType
} );

Router.map( function(){
    this.route( 'schedules', { path: '/' } );
    this.route( 'schedules/add' );
    this.route( 'schedules/view', { path: '/schedules/:schedule_id' } );

    this.route( 'drivers', { path: '/drivers' } );
    this.route( 'drivers/add' );
    this.route( 'drivers/view', { path: '/drivers/:driver_id' } );

    this.route( 'vehicles', { path: '/vehicles' } );
    this.route( 'vehicles/add' );
    this.route( 'vehicles/view', { path: '/vehicles/:vehicle_id' } );

} );

export default Router;
