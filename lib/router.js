/**
 * Created by Cole on 2/14/16.
 */
/* Application Entry Point */
Router.configure({
    layoutTemplate: 'app'
});

Router.onBeforeAction( function() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.redirect('/login');
    } else {
        this.next();
    }
}, {
    except: ['login' , 'join']
});

/* List unregistered templates */
/* Always make the user login, unless already logged in */
Router.route( '/' , {
    template: 'home'
});

Router.route('createWorkout');
Router.route('logworkout');
Router.route('login');
Router.route('join');
Router.route('addmovement');

/* User dashboard */
Router.route('home');