/**
 * Created by Cole on 2/14/16.
 */
Session.setDefault('isNewWorkout' , true);

const workoutHelper = function() {
    return C
}

Template.logworkout.rendered = function() {
    Meteor.typeahead.inject();
};

Template.logworkout.events({
    'click #submitResult': function(event, template) {
        event.preventDefault();

        console.log('submitting');

        let workout;

        /* Create Workout if new workout selected */
        if (Session.get('isNewWorkout')) {
            const name = template.$("[name=name]").val();
            const description = template.$("[name=description]").val();
            const score = template.$("[name=score]").val();

            workout = {
                name: name,
                description: description,
                createdAt: new Date(),
                exercises: Session.get('exercises'),
                scoredType: score,
                createdBy: Meteor.userId()
            };

            Meteor.call('addWorkout', workout);


            Session.set('exercises' , []);
            console.log("Created Workout");

            // Should probably set by id returned by insert
            workout = Workouts.findOne({name: name});

        } else {
            const n = template.$('[name=workout]').val();
            workout = Workouts.findOne({name: n});
        }
        /* Maybe use event.target instead of template jquery selection */
        const result = template.$('[name=result]').val();

        console.log(workout);

        let resultInsert = {
            workout: workout,
            createdAt: new Date(),
            result: result,
            athlete: Meteor.userId()
        };

        Meteor.call('logResult' , resultInsert);

        console.log('Created Result: ' , workout);

    },
    'change #selectWorkout': function(event, template) {
        // console.log('onchange');
        const workout = template.$('[name=workout]').val();

        if (workout === 'New_Workout') {
            Session.set('isNewWorkout' , true);
        } else {
            Session.set('isNewWorkout' , false);
        }
    }
});

Template.logworkout.helpers({
    newWorkout: function() {
        return Session.get('isNewWorkout');
    },
    workouts : function() {
        /* typeahead results */
        return Workouts.find().fetch().map( function(object) {
            return {
                id: object._id,
                value: object.name
            }
        });
    },
    diagnostic : function() {
        return Session.get('exercises');
    }
});

