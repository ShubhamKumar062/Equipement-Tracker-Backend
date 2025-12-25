require("dotenv").config();
const express = require("express");
const connectedDB = require("./config/db.js")
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js")

const app = express()
app.use(express.json());
app.use(cors());
connectedDB();
app.use("/api/users", userRoutes)
const PORT = process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server is Connected on ${PORT}`)
})

