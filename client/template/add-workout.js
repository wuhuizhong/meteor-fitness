/**
 * Created by Cole on 2/14/16.
 */
Template.addworkout.events({
    submit: function(event, template) {
        event.preventDefault();

        const n = template.$("[name=name]").val();
        const d = template.$("[name=description]").val();

        Workouts.insert({
            name: n,
            description: d,
            createdAt: new Date()
        });

        console.log("Created Workout");
    }
});