TODO List:

Deployment Date, March 13th

1) Realize that mobile mods should only be made at the last set pre full deploy (March 13th)
8) Only show results for logged in user
2) Completion should be based on result type, then a button to finish
5) Big Complete button after logging workout
3) Movements should have more info
3a) Default exercise properties
4) Exercise Additions should be more modular (Run shouldnt show weight normally, etc)
7) Exercise collection, for pr's and shit
6) Sets? or at least set multiplier? (ex. 3x2 @195)

var workout = {
    'sets': [ [ {movement , properties} , {movement, properties} ], [{movement, properties}] ]
}


workout = {
    'sets': [ {complex , properties} , { complex , properties } ],
    'description': "",
    'verified': false,
    'name': "custom",
    createdAt: "date",
    'type': "Completion",
    'createdBy': Meteor.userId()
    
}

complex = {
    exercises: [ exercise ],
    properties: {
        
    }
}

/* exercise can inherit or overide complex properties */
exercise = {
    movement: movement._id,
    properties: {
        reps: 10,
        weight: 10,
    }
};

var exampleWorkout = {
    'sets': [ { complex: exampleComplex1 , properties: { reps: 10 }} , { complex: exampleComplex2 , properties: {reps: 1}}],
    'description':"Burner",
    'verified': true,
    'name': 'custom',
    'createdAt': "today",
    'type': 'For Time',
    'createdBy':'Andrew'
};

var exampleComplex1 = {
    'exercises': [
        { movement: 'Full Clean',
          reps: 2 },
        { movement: 'Thruster',
          reps: 1 }
    ],
    'properties': {
        reps: 10,
        weight: 155,
        units: 'lbs',
    }
}

var exampleComplex2 = {
    'exercises': [
        {
            'movement': 'double unders',
            'properties': {
                reps: 30
            }
        }
    ],
}
