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
    }
});

Template.result.events({
    'click .card-panel': function(event, template) {

        let description = document.getElementById('description');

        // switch extra content
        if (description.className.indexOf('hidden') > 0) {
            $(description).removeClass('hidden');
        } else {
            $(description).addClass('hidden');
        }

    }
});