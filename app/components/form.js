/**
 * Created by abby on 7/8/16.
 */
import Ember from 'ember';

export default Ember.Component.extend( {
    tagName: 'form',
    layoutName: 'form',
    originalButtonHtml: null,
    originalButtonWidth: null,
    isLocked: false,

    lockForm: function(){
        if( this.get( 'originalButtonHtml' ) !== null ){
            var submitButton = this.$().find( '[type=submit]' );
            if( this.get( 'isLocked' ) ){
                submitButton.attr( 'disabled', 'disabled' );
                submitButton.width( this.get( 'originalButtonWidth' ) );
                submitButton.html( this.get( 'spinner' ) );
            }
            else{
                submitButton.removeAttr( 'disabled', 'disabled' );
                submitButton.removeClass( 'loading' );
                submitButton.html( this.get( 'originalButtonHtml' ) );
            }
        }
    }.observes( 'isLocked' ),

    submit: function( e ){
        e.preventDefault();
        this.sendAction( 'action' );
    },

    didInsertElement: function(){
        this.set( 'originalButtonHtml', this.$( '[type=submit]' ).html() );
        this.set( 'originalButtonWidth', this.$( '[type=submit]' ).width() );
    }
} );