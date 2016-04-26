/**
 * Created by Cole on 2/14/16.
 */

Session.setDefault('EXAMPLE_URL', '');

Template.addmovement.events({
    'submit': function(event , template) {
        event.preventDefault();

        let name = template.$('[name=name]').val();
        let catagory = template.$('[name=catagory]').val();
        let url = template.$('#exampleUrl').val();

        let movement = {
            name: name,
            verified: false,
            createdAt: new Date(),
            catagory: catagory,
            exampleVideo: url,
            createdBy: Meteor.userId()
        };

        Meteor.call('addMovement' , movement);

        console.log('Movement Created');
    },
    'keyup #exampleUrl': function (event , template) {

        let url = $(event.target).val();
        Session.set('EXAMPLE_URL' , url);

        if (!Meteor.isCordova) {
            event.preventDefault();

            let embedCode;

            /* convert url to embed */
            if (url.indexOf('watch') > 0) {
                let videoId = url.substr(url.indexOf('?v=') + 3, url.length);
                embedCode = "http://www.youtube.com/embed/" + videoId;
            }
            Session.set('EXAMPLE_URL', true);

            console.log('keyup');
            // Set the value of the embed
            if (document.getElementById('iframeVideo') === null) {
                console.log('player');
                let video = document.createElement('iframe');
                video.width = '100%';
                video.height = "400";
                video.id = "iframeVideo";
                video.setAttribute('src', embedCode);

                document.getElementById('player').appendChild(video);

            } else {
                console.log('select');
                $('#iframeVideo').attr({
                    width: '100%',
                    height: '300',
                    src: embedCode
                });
            }
        }

    },
    'click #videoLink': function(event , template) {
        event.preventDefault();
        console.log(Session.get("EXAMPLE_URL"));

        window.open(Session.get('EXAMPLE_URL'));
    }
});

Template.addmovement.helpers({
   'exampleUrl': function() {
        return Session.get('EXAMPLE_URL');
   },
    'cordova': function() {
        return Meteor.isCordova;
    }

});

