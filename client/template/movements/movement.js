/**
 * Created by Cole on 3/11/16.
 */
Template.movement.helpers({
    'catagoryIcon': function() {
        if (this.catagory === 'weight-lifting') {
            return 'W';
        }
    },
    'diagnostic': function() {
        return JSON.stringify(this);
    }
});

Template.movement.events({
    'click .card-panel': function(event, template) {

        let extra = template.$('#extra');
        let arrow = template.$('.fa-angle-right');

        if (extra.hasClass('hidden')) {
            arrow.css('transform' , 'rotate(90deg)');
            extra.removeClass('hidden');
        } else {
            arrow.css('transform' , 'rotate(0deg)');
            extra.addClass('hidden');
        }
    },
    'click #workoutLink': function(event , template) {
        if (Meteor.isCordova) {
            window.open(this.exampleVideo , '_system');
        } else {
            window.open(this.exampleVideo);
        }
    }

});