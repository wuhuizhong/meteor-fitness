/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('SHOW_MENU' , true);

Meteor.startup(function () {
    // set up a swipe left / right handler
    $(document.body).touchwipe({
        wipeLeft: function () {
            Session.set('SHOW_MENU', false);
        },
        wipeRight: function () {
            if (Meteor.user()) {
                Session.set('SHOW_MENU', true);
            }
        },
        preventDefaultEvents: false
    });

    if (Meteor.isCordova) {
        Session.set('SHOW_MENU' , false);
    }
});
Template.app.helpers({
    user: function () {
        return JSON.stringify(Meteor.user());
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