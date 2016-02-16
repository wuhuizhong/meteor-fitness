/**
 * Created by Cole on 2/14/16.
 */

var ERRORS_KEY = 'joinError';

Template.login.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});

Template.login.helpers({
    errorMessages: function() {
        return _.values(Session.get(ERRORS_KEY));
    },
    errorClass: function(key) {
        return Session.get(ERRORS_KEY)[key] && 'error';
    }
});

Template.login.events({
    submit: function(event, template) {
        event.preventDefault();

        var email = template.$('[name=email]').val();
        var password = template.$('[name=password]').val();

        var errors = {};

        if (! email) {
            errors.email = 'Email required';
        }

        if (! password) {
            errors.password = 'Password required';
        }

        Session.set(ERRORS_KEY, errors);
        if (_.keys(errors).length) {
            return;
        }

        Meteor.loginWithPassword( email , password , function(error) {
            if (error) {
                return Session.set(ERRORS_KEY, {'none': error.reason});
            }
        });

        Router.go('home');
    }
});