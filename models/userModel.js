const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, " user have user name. enter it"],
        trim: true
    },
    email: {
        type: String,
        required:[true, " email ?"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required:[true, " password?"]
       
    },
    role: {
        type: Number,
        default: 0 // 0=user, 1= admon

       
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dff4rbfkn/image/upload/v1630895843/2048px-User_icon_2.svg_fvrwk5.png"

       
    }




}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)