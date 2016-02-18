/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('isNewWorkout' , false);

Template.logworkout.events({
    'submit #submitResult': function(event, template) {
        event.preventDefault();

        /* Maybe use event.target instead of template jquery selection */
        const workout = template.$('[name=workout]').val();
        const result = template.$('[name=result]').val();

        console.log(workout);

        Results.insert({
            workout: workout,
            createdAt: new Date(),
            result: result,
            athlete: Meteor.userId()
        });

        console.log('Created Event: ' , workout);

    },
    'change #selectWorkout': function(event, template) {
        console.log('onchange');
        const workout = template.$('[name=workout]').val();

        if (workout === 'New Workout') {
            Session.set('isNewWorkout' , true);
        }
    }
});

Template.logworkout.helpers({
    newWorkout: function(template) {

        return Session.get('isNewWorkout');
    },
    workouts : function() {
        return Workouts.find();
    }
});