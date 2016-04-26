/**
 * Created by Cole on 2/24/16.
 */

Template.workoutForm.events({
    'click #addExercise': function(event, template) {
        event.preventDefault();
        
        /* Create Complex */
        var complex = [];
        

        let exercise = {};
        exercise.movement = template.$('#exerciseMovement').val();
        exercise.reps = template.$('#exerciseReps').val();
        exercise.distance = template.$('#exerciseDistance').val();
        exercise.weight = template.$('#exerciseWeight').val();

        console.log('exercise' , exercise);
        let exercises = Session.get('exercises');
        exercises.push(exercise);

        Session.set('exercises' , exercises);

    }
});

Template.workoutForm.helpers({
    exercises: function() {
        return Session.get('exercises');
    }
});