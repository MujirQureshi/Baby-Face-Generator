const {initializeApp} = require("firebase-admin/app");

initializeApp();

const payment = require('./payment');
exports.processJobTesting = payment.processJobTesting

/* const email = require('./email');
exports.sendEmail = email.sendEmail */