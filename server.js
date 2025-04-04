const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const ToDoRoute = require('./routes/ToDoRoute');
const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log(`Connected to MongoDB...`))
    .catch((error) => console.log(error));

app.use(routes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

