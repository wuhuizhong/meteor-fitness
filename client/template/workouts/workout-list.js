/**
 * Created by Cole on 2/14/16.
 */
Template.workoutList.helpers({
   workouts: function() {
       return Workouts.find({ userId: Meteor.userId() });
   }
});