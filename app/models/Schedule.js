import DS from 'ember-data';

export default DS.Model.extend( {
    day_of_week: DS.attr(),
    start_time: DS.attr(),
    end_tome: DS.attr(),
    driver_id: DS.attr(),
    vehicle_id: DS.attr(),
    status: DS.attr('number'),
    driver_name: DS.attr(),

    driver: DS.belongsTo( 'driver', { async: true } )

});
