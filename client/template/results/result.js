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