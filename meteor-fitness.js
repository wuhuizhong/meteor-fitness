/* Import Objects */
// import athlete from './model/athlete';

/* Create seperate Collections */
class User {
  constructor(params) {
    this._id;
    this.name = params.name;
    this.results = params.results;
  }

  get Diagnostic() {
    return JSON.stringify( this );
  }
}


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
