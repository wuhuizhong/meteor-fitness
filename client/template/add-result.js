/**
 * Created by Cole on 2/14/16.
 */
Template.addresult.events({
    submit: function(event, template) {
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

    }
});

Template.addresult.helpers({
    workouts : function() {
        return Workouts.find();
    }
});