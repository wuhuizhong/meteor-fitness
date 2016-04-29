/**
 * Created by Cole on 2/14/16.
 */

Session.setDefault('isComplex' , false);
Session.setDefault('sets' , [{}]);

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
    },
    set: function() {
        /* No simple iteration method */
        return Session.get('sets');
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
        reps.setAttribute('placeholder' , 'Reps');

        // See if it is a complex
        if (!Session.get('isComplex')) {
            /* Add reps to the first movement */
            console.log('adding reps');
            document.querySelector('.complexReps').style.display = 'inline-block';
            Session.set('isComplex' , true);
        }

        /* Create Movement input box */
        newMovement.setAttribute('type' , 'text');
        newMovement.setAttribute('name' , 'movements');
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
    },
    'click #finish': function(event , target) {
        event.preventDefault();
        /* Add Exercise to workout list */
        console.log(Session.get('exercises'));
        /* Add Complex if one doesnt already exist */
        let complex = { movements:[] , properties:{} };
        let movements = document.getElementsByClassName('movement');
        console.log(movements);

        /* Iterate through all movements listed listed */
        for (var i = 0; i < movements.length; i++) {
            console.log(movements[i]);
            let reps = 1;

            if (Session.get('isComplex')) {
                reps = movements[i].firstElementChild.value;
            }

            console.log('reps' , reps);

            /* Because of typeahead */
            var name = document.querySelectorAll('[name=movements]')[i].value;
            console.log(name);

            /* Assume movement already exists */
            var m;
            try {
                m = Movements.findOne({name: name});
            } catch (e) {
                console.log('Movement Does Not Exist' , e);
            }

            /* Catch undefined */
            if (m === undefined) {
                console.log('Movement is Undefined');
                return;
            }

            /* Need to rethink how to put multiple movements in complex */
            for (var j = 0; j < reps; j++) {
                complex.movements.push(m);
            }
            console.log('Complex' , complex);
        }

        /* Add weight to complex */
        let weights = document.querySelectorAll('[name=weight]');

        /* Add sets and reps */
        complex.properties.reps = document.querySelector('[name=reps]').value;

        /* Add complex to complex list */
        Meteor.call('addComplex' , complex);
        /* Sets is not a property of a complex */
        let sets = document.querySelector('[name=sets]').value;

        /* Add Complex to exercise list */
        let exercises = Session.get('exercises');
        /* Add individual complexes with different weights */
        for (var i = 0; i < weights.length; i++) {
            exercises.push({complex: complex, weight: weights[i].value});
        }

        console.log('exercises' , exercises);
        Session.set('exercises' , exercises);

        /* Skip the first one, but remove others, reset to non-complex exercise */
        if (Session.get('isComplex')) {
            var complexNode = document.querySelector('.complex');
            for (var i = 1; i < movements.length; i++) {
                console.log('removing', movements[i]);
                complexNode.removeChild(movements[i]);
            }
            document.querySelector('.movement').removeChild(document.querySelector('.complexReps'));
        }

        Session.set('isComplex' , false);
    },
    'change .sets': function(event, template) {
        event.preventDefault();
        var num = template.$('.sets').val();
        var i = 1, sets = [{}];

        if (num !== null || num !== undefined || num !== '') {
            while (i < num) {
                sets.push({});
                i++;
            }
        }
        Session.set('sets' , sets);
    }
});

