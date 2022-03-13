const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        unique: [true, "Email already exists"],
        required: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    },
    name: {
        type: String,
        required: true,
        lowercase:true
    }
});

const Email = mongoose.model("users", emailSchema);

module.exports = { Email };