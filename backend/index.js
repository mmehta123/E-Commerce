const express = require("express")
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();
dotenv.config();

app.use(express.json())
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/auth", userRoutes);

const connect = () => {
    console.log("DB connection started");
    return mongoose.connect(process.env.MONGO_URL);
}


app.listen(process.env.PORT, async () => {
    try {
        await connect();
        console.log('server listening on port ' + process.env.PORT);
    } catch (e) {
        console.log("something went wrong, while connecting to server");
    }
})