/**
 * Created by Cole on 2/14/16.
 */

    Template.app.helpers({
        user: function () {
            return Meteor.user().emails[0].address;
        }
    });
Template.app.events({
    'click #logout': function() {
        Meteor.logout();

        Router.go('login');
    }
});