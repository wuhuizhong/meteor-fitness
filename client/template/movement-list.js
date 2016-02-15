/**
 * Created by Cole on 2/14/16.
 */
Template.movementList.helpers({
    movements: function() {
        return Movements.find({});
    }
});