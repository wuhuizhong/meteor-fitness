/**
 * Created by Cole on 2/14/16.
 */
Template.home.helpers({
    user: function() {
        return Accounts.user().emails[0].address;
    },
    results: function() {
        /* Find all recent logged workouts, in the future add friends */
        var results = Results.find({}, {sort: {createdAt: -1} , limit: 20}).fetch();
        console.log(results);
        return results;
    },
});
