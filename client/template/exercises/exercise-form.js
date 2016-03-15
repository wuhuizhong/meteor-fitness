/**
 * Created by Cole on 2/14/16.
 */

Template.addexercise.rendered = function() {
    Meteor.typeahead.inject();
};

Template.addexercise.helpers({
    movements : function() {
        return Movements.find().fetch().map( function(obj) {
            return {
                id: obj._id,
                value: obj.name,
                header: '<h3 class="movement-catagory">' + obj.catagory + '</h3>'
            }
        });
    }
});

