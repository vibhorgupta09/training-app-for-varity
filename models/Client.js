const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String,
        required: true
    },
    companyName: { type: String,
        // required: true
    },
    designation: { type: String,
        // required: true
    },
    email: { type: String,
        // required: true
    },
    contactNo: { type: String,
        // required: true
    },
    trainees:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trainee"
    }]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
