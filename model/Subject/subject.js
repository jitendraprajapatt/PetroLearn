const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    Name: { type: String },
    Image: { type: String},
    Description: { type: String },
    Time: { type: String }


});

const subject = mongoose.model("subject", subjectSchema);
module.exports = subject;


