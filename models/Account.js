const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    Name: { type: String,
        required: true
    },
    date: { type: Date,
        required: true
    },
    paidOrNot: { 
        type: Boolean,
        required: true
    },
    FeeOverdueDuration:{
        type: Number,
    },
    invoice: {
        type: Buffer,
    },
    purchaseOrder: {
        type: Buffer,
    },

});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
