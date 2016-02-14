/**
 * Created by Cole on 2/13/16.
 */
class Workout {
    constructor(params) {
        /* probably need validation */
        this._id = params.id;
        this.name = params.name;
        this.description = params.description;
    }
}