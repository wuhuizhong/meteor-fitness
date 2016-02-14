/**
 * Created by Cole on 2/14/16.
 */
if (Meteor.isClient) {
    Template.join.events({
        'submit': function(event , template) {
            event.preventDefault();

            var email = template.$('[name=email]').val();
            var password = template.$('[name=password]').val();
            var confirm = template.$('[name=confirm]').val();


            Accounts.createUser({
                email: email,
                password: password
            } , function (error) {
                if (error) {
                    alert(error);
                }
            });

            console.log('user created');

            Router.go('home');
        }
    })


}