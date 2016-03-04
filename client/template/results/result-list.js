/**
 * Created by Cole on 2/14/16.
 */
Template.resultList.helpers({
    results: function() {
        return Results.find({ athlete: Meteor.userId() } , {sort: {createdAt: -1}});
    }
});