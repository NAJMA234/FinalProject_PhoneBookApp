const express = require('express');
const cors = require('cors');
const connectDb = require('./mongodb/connect');
require('dotenv').config();

const addPhoneRouter = require('./routes/addPhone.route');
const viewPhoneRouter = require('./routes/viewPhone.route');
const updatePhoneRouter = require('./routes/updatePhone.route');
const deletePhoneRouter = require('./routes/deletePhone.route');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

connectDb(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/add-phone', addPhoneRouter);
app.use('/get-phone', viewPhoneRouter);
app.use('/update-phone', updatePhoneRouter);
app.use('/delete-phone', deletePhoneRouter);

