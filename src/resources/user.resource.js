class UserResource {
    constructor(user) {
        this.id = user.id || user._id; // Support for MongoDB's _id
        this.name = user.name;
        this.email = user.email;
        this.preferences = user.preferences;
    }

    /**
     * Converts an array of user objects into an array of UserResource instances.
     * @param {Array} users - The array of user objects to be transformed.
     * @returns {Array} An array of UserResource instances.
     */

    static collection(users) {
        return users.map((user) => new UserResource(user));
    }

    static resource(user) {     
        return new UserResource(user);
    }
}

export default UserResource;