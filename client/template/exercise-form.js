/**
 * Created by Cole on 2/14/16.
 */
Template.addexercise.helpers({
    movements: function() {
        return Movements.find();
    }
});