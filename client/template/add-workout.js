/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('exercises', []);
Template.addworkout.events({
    submit: function(event, template) {
        event.preventDefault();

        const n = template.$("[name=name]").val();
        const d = template.$("[name=description]").val();

        Workouts.insert({
            name: n,
            description: d,
            createdAt: new Date(),
            exercises: Session.get('exercises')
        });

        console.log("Created Workout");
    },
    'click #addExercise': function(event, template) {
        console.log('addExercise' , event , template);
        event.preventDefault();

        let exercise = {};
        exercise.movement = template.$('#exerciseMovement').val();
        exercise.reps = template.$('#exerciseReps').val();
        exercise.distance = template.$('exerciseDistance').val();
        exercise.weight = template.$('exerciseWeight').val();

        let exercises = Session.get('exercises');
        exercises.push(exercise);

        Session.set('exercises' , exercises);

    }
});

Template.addworkout.helpers({
    exercises: function() {
        return Session.get('exercises');
    }
});
