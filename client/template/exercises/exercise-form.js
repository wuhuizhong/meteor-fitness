/**
 * Created by Cole on 2/14/16.
 */

Session.setDefault('isComplex' , false);

Template.addexercise.rendered = function() {
    Meteor.typeahead.inject();
};

Template.addexercise.helpers({
    movements : function() {
        return Movements.find().fetch().map( function(obj) {
            return {
                id: obj._id,
                value: obj.name,
                header: '<h3 class="movement-catagory">' + obj.catagory + '</h3>'
            }
        });
    },
    complex: function() {
        return 'Complex';
    }
});

Template.addexercise.events({
    'click #superset': function(event, target) {
        event.preventDefault();
        console.log('superset');

        /* Inject new movement & reps */
        var complex = document.getElementById('complex');
        var movement = document.createElement('div');
        movement.setAttribute('class' , 'movement');

        var newMovement = document.createElement('input');
        var reps = document.createElement('input');
        reps.setAttribute('class' , 'complexReps');
        reps.setAttribute('name' , 'complexReps');
        reps.setAttribute('placeholder' , 'reps');

        // See if it is a complex
        if (!Session.get('isComplex')) {
            /* Add reps to the first movement */
            console.log('adding reps');
            document.querySelector('.complexReps').style.display = 'inline-block';
            Session.set('isComplex' , true);
        }

        /* Create Movement input box */
        newMovement.setAttribute('type' , 'text');
        newMovement.setAttribute('class' , 'form-control typeahead movement-name');
        newMovement.setAttribute('autocomplete','off');
        newMovement.setAttribute('placeholder' , 'Movement Name');
        newMovement.setAttribute('spellcheck' , 'false');
        newMovement.setAttribute('data-source' , 'movements');

        /* Add to sub div */
        movement.appendChild(reps);
        movement.appendChild(newMovement);

        /* Add div to complex */
        complex.appendChild(movement);
    }
});

