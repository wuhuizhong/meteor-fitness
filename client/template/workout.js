/**
 * Created by Cole on 2/14/16.
 */
Template.workout.helpers({
    name: function () {
        return this.name;
    },
    description: function() {
        return this.description;
    },
    exercises: function() {
        return this.exercises;
    }
});