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
    'click button': function(event, template) {
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
    },
    'blur input': function(event, template) {
        /* Style Selections and Helpers, keeps Titles above */

        let that = $(event.target);

        if (that.val()) {
            that.addClass('used');
        } else {
            that.removeClass('used');
        }
    },
    'click .ripples': function(event) {

        console.log('Ripples');

        let that = $(event.target);
        let offset = that.parent().offset();
        let circle = that.find('.ripplesCircle');

        let x = event.pageX - offset.left;
        let y = event.pageY - offset.top;

        circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        that.addClass('is-active');
    },
    '.ripples webkitAnimationEnd': function(event) {
        let that = $(event.target);
        that.removeClass('is-active');
    }
});

/* Style Selections and Helpers */
