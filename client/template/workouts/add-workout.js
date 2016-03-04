/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('exercises', []);
Template.createworkout.events({
    'submit #addWorkout': function(event, template) {
        event.preventDefault();

        const name = template.$("[name=name]").val();
        const description = template.$("[name=description]").val();
        const score = template.$("[name=score]").val();

        Workouts.insert({
            name: name,
            description: description,
            createdAt: new Date(),
            exercises: Session.get('exercises'),
            scoredType: score,
            createdBy: Meteor.userId(),
        });

        Session.set('exercises' , []);
        console.log("Created Workout");
    },
    'click #addExercise': function(event, template) {
        event.preventDefault();

        let exercise = {};
        exercise.movement = template.$('#exerciseMovement').val();
        exercise.reps = template.$('#exerciseReps').val();
        exercise.distance = template.$('#exerciseDistance').val();
        exercise.weight = template.$('#exerciseWeight').val();

        console.log('exercise' , exercise);
        let exercises = Session.get('exercises');
        exercises.push(exercise);

        Session.set('exercises' , exercises);

    },
    'click #newWorkout': function(event, template) {
        // reset session variable
        Session.set('exercises' , []);
    }
});

Template.createworkout.helpers({
    exercises: function() {
        return Session.get('exercises');
    },
    newWorkout: function() {
        return Session.get('isNewWorkout');
    }
});
