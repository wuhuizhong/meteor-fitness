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
        });
        Meteor.publish('complexes' , function() {
            return Complexes.find();
        });
        Meteor.publish('allUsers' , function() {
            return Meteor.users.find({} ,{fields: {
                'profile.firstName':1,
                'emails':1,
                'profile.lastName':1,
                '_id':1
            }});
        });
    });
}