/**
 * Created by Cole on 2/14/16.
 */
Template.addmovement.events({
    submit: function(event , template) {
        event.preventDefault();

        let n = template.$('[name=name]').val();
        let t = template.$('[name=type]').val();

        let movement = {
            name: n,
            createdAt: new Date(),
            type: t,
            createdBy: Meteor.userId()
        };

        Meteor.call('addMovement' , movement);

        console.log('Movement Created');
    }
});