const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    },
   
}
)

const Usermodel = mongoose.model('Usermodel', UserSchema);

module.exports = Usermodel;