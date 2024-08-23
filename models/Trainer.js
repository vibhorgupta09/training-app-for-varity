const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: { type: String,
        required: true
    },
    // username: { type: String,
    //     required: true
    // },
    // password: { type: String,
    //     required: true
    // },
    address: { type: String,
        // required: true
    },
    contactNo: { type: String,
        required: true
    },
    batches:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Batch"
    }]
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;
