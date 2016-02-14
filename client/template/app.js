/**
 * Created by Cole on 2/14/16.
 */

if (Meteor.isClient) {
    Template.app.helpers({
        user: function () {
            return Meteor.user().emails[0].address;
        }
    });
}