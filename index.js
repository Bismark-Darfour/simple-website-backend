// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use(express.json());

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});