const express = require('express');
const Notification = require('../models/notificationModel');

const router = new express.Router();

router.post("/sns", async (req, res) => {
    const type = req.body.Type;

    const notification = new Notification({
        type,
        message: "test"
    });
    try {
        await notification.save();

        // res.send(notification);
    } catch (err) {
        console.log(err);
    }
});


router.get("/test", async (req, res) => {
    const notification = new Notification({
        type: "test",
        message: "test"
    });
    try {
        await notification.save();

        res.send(notification);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;