/**
 * Created by Cole on 3/5/16.
 */
Meteor.methods({
    addWorkout: function(workout) {
        // Validate also
        Workouts.insert(workout);
    },
    logResult: function(result) {
        // Should do some validation here
        Results.insert(result);
    },
    addMovement: function(movement) {
        Movements.insert(movement);
    },
    getWorkouts: function(userId) {
        console.log('Issue');
        return Workouts.find({ createdBy: userId } , {sort: { createdAt: -1 }})
    },
    getMovements: function() {
        return Movements.find();
    },
    getResults: function(userId) {
        return Results.find({ createdBy: userId } , {sort: { createdAt: -1 }})
    }
});