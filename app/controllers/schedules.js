import Ember from 'ember';

export default Ember.Controller.extend( {
    status: 0,
    sortPorperties: [ 'order' ],

    scheduleTypes: [
        { label: 'Sunday', val: 0},
        { label: 'Monday', val: 1},
        { label: 'Tuesday', val: 2},
        { label: 'Wednesday', val: 3},
        { label: 'Thursday', val: 4},
        { label: 'Friday', val: 5},
        {label: 'Saturday', val: 6}
    ],
} );
