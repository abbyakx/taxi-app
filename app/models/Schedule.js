import DS from 'ember-data';

export default DS.Model.extend( {
    day_of_week: DS.attr('number'),
    start_time: DS.attr(),
    end_time: DS.attr(),
    driver_id: DS.attr(),
    vehicle_id: DS.attr(),
    status: DS.attr( 'number' ),
    driver_name: DS.attr(),

    driver: DS.belongsTo( 'driver', { async: true } ),

    str_day: function(){
        switch( this.get( 'day_of_week' ) ){
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return '';
        }
    }.property( 'day_of_week' )


} );
