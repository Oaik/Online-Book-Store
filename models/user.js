const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    date: {type: Date, default: Date.now}
})

userSchema.methods.showDateRegisterd = () => {
    console.log(this.date);
}

const User = mongoose.model('User', userSchema);

module.exports = User;