/**
 * Created by Cole on 2/14/16.
 */
Template.resultList.helpers({
    results: function() {
        return Results.find({} , {sort: {createdAt: -1}});
    }
});