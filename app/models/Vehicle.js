import DS from 'ember-data';

export default DS.Model.extend( {
    plate_number: DS.attr(),
    make: DS.attr(),
    status: DS.attr('number'),
    model: DS.attr()

});
