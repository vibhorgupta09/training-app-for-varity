const mongoose = require('mongoose');

const traineeSchema = new mongoose.Schema({
    name: { type: String,
            required: true
        },
    address: { type: String, 
                // required: true
            },
    email: { type: String,
            // required: true
        },
    contactNo: { type: String,
            // required: true
        },
    batches:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Batch"
    }]
});

const Trainee = mongoose.model('Trainee', traineeSchema);

module.exports = Trainee;
