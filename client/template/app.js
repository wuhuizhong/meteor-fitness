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
            Session.set('SHOW_MENU', true);
        },
        preventDefaultEvents: false
    });
});
Template.app.helpers({
    user: function () {
        return Meteor.user().emails[0].address;
    },
    menuOpen: function() {
        if (Session.get('SHOW_MENU')) {
            return 'showMenu';
        } else {
            return false;
        }
    },
    menuShowing: function() {
        if (Session.get('SHOW_MENU')) {
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
    }
});