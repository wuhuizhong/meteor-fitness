/**
 * Created by Cole on 2/14/16.
 */
Template.home.helpers({
    user: function() {
        return Accounts.user().emails[0].address;
    }
});