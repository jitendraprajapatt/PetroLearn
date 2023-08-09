// all heading of topic here 
const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({

    SName: String,
    SID: String,
    Heading: String,
    HID : String

});

// Topics data  of headingList
const topicSchema = new mongoose.Schema({

    Heading: { type: String, required: true },
    SubjectName: { type: String, required: true },
    SID: { type: String },
    HID: { type: String },
    ContentData: {
        Description: { type: String, required: true },
        Image: [String],
        Time: {type:Date}
    }

});

const headingList = mongoose.model('HeadingList', headingSchema);
const topicsData = mongoose.model('Topics', topicSchema);
module.exports = { headingList, topicsData };
