/**
 * Created by Cole on 2/15/16.
 */
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
       Meteor.publish('workouts' , function() {
           return Workouts.find();
       });
        Meteor.publish('results' , function() {
            return Results.find();
        });

        Meteor.publish('movements' , function() {
            return Movements.find();
        })
    });
}