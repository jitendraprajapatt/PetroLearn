// all heading of topic here 
const mongoose = require('mongoose');

const headingSchema = new mongoose.Schema({

    subjectName: String,
    SID: String,
    title: String,
    TID: String

});

// Topics data  of headingList
/*const topicSchema = new mongoose.Schema({

    Heading: { type: String, required: true },
    SubjectName: { type: String, required: true },
    SID: { type: String },
    HID: { type: String },
    ContentData: {
        Description: { type: String, required: true },
        Image: [String],
        Time: {type:Date}
    }

});*/

// new topic add
const topicSchema = new mongoose.Schema({
    header: {
        SID: { type: String },
        sName: { type: String },
        TID: { type: String },
        Time: { type: Date }
    },
    title: { type: String },
    heading: { type: String },
    summery: { type: String },
    images: [String],
    impPoint: [String]
}
);

const headingList = mongoose.model('TitleList', headingSchema);
const topicsData = mongoose.model('Topics', topicSchema);
module.exports = { headingList, topicsData };
