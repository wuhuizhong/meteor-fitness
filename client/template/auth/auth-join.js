/**
 * Created by Cole on 2/14/16.
 */
var ERRORS_KEY = 'joinError';

Template.join.onCreated(function() {
    Session.set(ERRORS_KEY, {});
});

Template.join.helpers({
    errorMessages: function() {
        return _.values(Session.get(ERRORS_KEY));
    },
    errorClass: function(key) {
        return Session.get(ERRORS_KEY)[key] && 'error';
    }
});

Template.join.events({
        'click #join': function(event , template) {
            event.preventDefault();
            console.log('join submit');

            var firstName = template.$('#first_name').val();
            var lastName = template.$('#last_name').val();
            var email = template.$('#email').val();
            var password = template.$('#password').val();
            var confirm = template.$('#confirm').val();

            var errors = {};

            if (! email) {
                errors.email = 'Email required';
            }

            if (! password) {
                errors.password = 'Password required';
            }

            if (confirm !== password) {
                errors.confirm = 'Please confirm your password';
            }

            Session.set(ERRORS_KEY, errors);
            if (_.keys(errors).length) {
                return;
            }

            console.log('creating users');


            Accounts.createUser({
                email: email,
                password: password,
                profile: { firstName: firstName, lastName: lastName },
                createdAt: new Date()
            } , function (error) {
                if (error) {
                    return Session.set(ERRORS_KEY, {'none': error.reason});
                }
            });

            console.log('user created');

            Router.go('/home');
        },
    'click #login':function (event) {
        event.preventDefault();
        Router.go('/login');
    }
});
