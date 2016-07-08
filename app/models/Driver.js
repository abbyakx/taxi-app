import DS from 'ember-data';

export default DS.Model.extend( {
    first_name: DS.attr(),
    last_name: DS.attr(),
    status: DS.attr( 'number' ),
    license_number: DS.attr(),

    schedules: DS.hasMany( 'schedule', { async: true } ),

    name: function(){
        return this.get( 'first_name' ) + ' ' + this.get( 'last_name' );
    }.property( 'first_name', 'last_name' )
} );