/**
 * Created by Cole on 2/14/16.
 */
Template.result.helpers({
    selectedWorkout: function() {
        return Workouts.findOne(this.workout);
    },
    result: function() {
        return this.result;
    },
    diagnostic: function() {
        return this;
    }
});