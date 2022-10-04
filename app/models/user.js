import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddresss: String,
},{
    timestamps: true,
    collation: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('user', UserSchema);
