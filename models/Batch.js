const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    batchName: { type: String,
        required: true
    },
    // noOfStudents: { type: Number,
    //     // required: true
    // },
    date: { type: Date,
        required: true
    },
    // time: { type: String,
    //     required: true
    // },
    meetingLink: { type: String,
        // required: true
    },
    venue: { type: String,
        // required: true
    },
    trainees:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trainee"
    }]
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
