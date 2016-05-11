/**
 * Created by Cole on 2/14/16.
 */
Template.result.helpers({
    diagnostic: function() {
        return JSON.stringify(this);
    },
    dateFormater: function() {
        /* Format date */
        let date = new Date(this.createdAt);

        return '' +  date.toLocaleDateString();
    },
    findUser: function (id) {
        var user = Meteor.users.findOne({_id: id});
        console.log(user);
        return user;
    }
});

Template.result.events({
    'click .card-panel': function(event, template) {

        let description = template.$('#description');
        let arrow = template.$('.fa-angle-right');

        // switch extra content
        if (description.hasClass('hidden')) {
            arrow.css('transform' , 'rotate(90deg)');
            description.removeClass('hidden');
        } else {
            arrow.css('transform' , 'rotate(0deg)');
            description.addClass('hidden');
        }

    }
});