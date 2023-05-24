import { Schema , model , models  } from "mongoose"; // this will be interact with the mongoDB

const UserSchema = new Schema({
    email: {
        type: 'String',
        unique: [true ,'Email already exists!'],
        required: [true ,'Email is Required!']
    },

    username: {
        type: 'String',
        required: [true , 'Username is already exists!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    image: {
        type: 'String',

    }
});

const User = models.User ||  model('User', UserSchema)

export default User;