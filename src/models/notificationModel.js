const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    type: {
        type: String
    },
    message: {
        type: String
    }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;