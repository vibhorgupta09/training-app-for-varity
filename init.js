const mongoose = require('mongoose');
const Client = require('./models/Client');
const Trainee = require('./models/Trainee');
const Trainer = require('./models/Trainer');
const Batch = require('./models/Batch');

async function initializeData() {
    await mongoose.connect('mongodb://127.0.0.1:27017/trainingDatabase');

    // Drop all collections
    const collections = ['clients', 'trainees', 'trainers', 'batches','attendances'];
    for (const collection of collections) {
        await mongoose.connection.db.dropCollection(collection).catch(err => {
            if (err.codeName === 'NamespaceNotFound') {
                console.log(`Collection ${collection} does not exist.`);
            } else {
                throw err;
            }
        });
    }

    const trainees = [
        { name: 'Trainee 1', address: 'Address 1', email: 'trainee1@example.com', contactNo: '1234567890' },
        { name: 'Trainee 2', address: 'Address 2', email: 'trainee2@example.com', contactNo: '1234567891' },
        { name: 'Trainee 3', address: 'Address 3', email: 'trainee3@example.com', contactNo: '1234567892' },
        { name: 'Trainee 4', address: 'Address 4', email: 'trainee4@example.com', contactNo: '1234567893' },
        { name: 'Trainee 5', address: 'Address 5', email: 'trainee5@example.com', contactNo: '1234567894' },
    ];

    const savedTrainees = await Trainee.insertMany(trainees);

    const batches = [
        {
            className: 'Batch 1', date: new Date(), time: '10:00 AM', meetingLink: 'http://example.com/meeting1',
            venue: 'Venue 1', trainees: [savedTrainees[0]._id, savedTrainees[1]._id]
        },
        {
            className: 'Batch 2', date: new Date(), time: '2:00 PM', meetingLink: 'http://example.com/meeting2',
            venue: 'Venue 2', trainees: [savedTrainees[2]._id, savedTrainees[3]._id]
        },
        {
            className: 'Batch 3', date: new Date(), time: '4:00 PM', meetingLink: 'http://example.com/meeting3',
            venue: 'Venue 3', trainees: [savedTrainees[4]._id]
        },
        {
            className: 'Batch 4', date: new Date(), time: '6:00 PM', meetingLink: 'http://example.com/meeting4',
            venue: 'Venue 4', trainees: [savedTrainees[0]._id, savedTrainees[3]._id]
        },
        {
            className: 'Batch 5', date: new Date(), time: '8:00 PM', meetingLink: 'http://example.com/meeting5',
            venue: 'Venue 5', trainees: [savedTrainees[1]._id, savedTrainees[4]._id]
        },
    ];

    const savedBatches = await Batch.insertMany(batches);

    await Trainee.updateMany(
        { _id: { $in: savedTrainees.map(trainee => trainee._id) } },
        { $set: { batches: savedBatches.map(batch => batch._id) } }
    );

    const trainers = [
        { name: 'Trainer 1', username: 'trainer1', password: 'password1', address: 'Address 1', contactNo: '0987654321', batches: [savedBatches[0]._id, savedBatches[1]._id] },
        { name: 'Trainer 2', username: 'trainer2', password: 'password2', address: 'Address 2', contactNo: '0987654322', batches: [savedBatches[2]._id] },
        { name: 'Trainer 3', username: 'trainer3', password: 'password3', address: 'Address 3', contactNo: '0987654323', batches: [savedBatches[3]._id] },
        { name: 'Trainer 4', username: 'trainer4', password: 'password4', address: 'Address 4', contactNo: '0987654324', batches: [savedBatches[4]._id] },
        { name: 'Trainer 5', username: 'trainer5', password: 'password5', address: 'Address 5', contactNo: '0987654325', batches: [savedBatches[0]._id, savedBatches[2]._id] },
    ];

    await Trainer.insertMany(trainers);

    const clients = [
        { name: 'Client 1', companyName: 'Company 1', designation: 'Manager', email: 'client1@example.com', contactNo: '1122334455', trainees: [savedTrainees[0]._id] },
        { name: 'Client 2', companyName: 'Company 2', designation: 'Director', email: 'client2@example.com', contactNo: '2233445566', trainees: [savedTrainees[1]._id] },
        { name: 'Client 3', companyName: 'Company 3', designation: 'CEO', email: 'client3@example.com', contactNo: '3344556677', trainees: [savedTrainees[2]._id] },
        { name: 'Client 4', companyName: 'Company 4', designation: 'CTO', email: 'client4@example.com', contactNo: '4455667788', trainees: [savedTrainees[3]._id] },
        { name: 'Client 5', companyName: 'Company 5', designation: 'CFO', email: 'client5@example.com', contactNo: '5566778899', trainees: [savedTrainees[4]._id] },
    ];

    await Client.insertMany(clients);

    console.log('Sample data inserted successfully');
    mongoose.connection.close();
}

initializeData().catch(err => console.error('Error initializing data:', err));
