/**
 * Created by Cole on 2/14/16.
 */
Template.addresult.events({
    submit: function(event, template) {
        event.preventDefault();

        /* Maybe use event.target instead of template jquery selection */
        const name = template.$('[name=name]').val();
        const time = template.$('[name=result]').val();

        console.log(Results);

        Results.insert({
            name: name,
            createdAt: new Date(),
            time: time,
            athlete: Meteor.userId()
        });

        console.log('Created Event');

    }
});