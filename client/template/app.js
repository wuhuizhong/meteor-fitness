/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('SHOW_MENU' , false);

Meteor.startup(function () {
    // set up a swipe left / right handler
    $(document.body).touchwipe({
        wipeLeft: function () {
            Session.set('SHOW_MENU', false);
        },
        wipeRight: function () {
            Session.set('SHOW_MENU', true);
        },
        preventDefaultEvents: false
    });
});
Template.app.helpers({
    user: function () {
        return Meteor.user();
    },
    menuOpen: function() {
        let routeName = Router.current().route.getName();

        if (Session.get('SHOW_MENU') ) {
            return 'showMenu';
        } else {
            return false;
        }
    },
    menuShowing: function() {

        if (Session.get('SHOW_MENU') ) {
            return 'menuShowing';
        } else {
            return false;
        }
    }
});
Template.app.events({
    'click #logout': function() {
        Meteor.logout();

        Router.go('login');
    },
    'click #goHome': function(event) {
        Router.go('home');
    },
    'click #goLogWorkout': function(event) {
        Router.go('logworkout');
    },
    'click #goCreateWorkout': function(event) {
        Router.go('createworkout');
    },
    'click #goAddMovement': function(event) {
        Router.go('addmovement');
    }
});