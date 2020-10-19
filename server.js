const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once("open", () => console.log("connection established succesfully"));

const jobsRouter = require('./routes/jobs');
app.use('/jobs', jobsRouter);


if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
  
}





app.listen(port, () => console.log(`The app is running on port ${port}`));