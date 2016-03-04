/**
 * Created by Cole on 2/14/16.
 */
Template.result.helpers({
    selectedWorkout: function() {
        return this.result.workout;
    },
    result: function() {
        return this.result;
    },
    diagnostic: function() {
        return JSON.stringify(this);
    }
});