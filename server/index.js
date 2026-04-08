const express = require("express");
const dbconnection = require("./db");
const cors = require("cors")
const userroutes = require("./Routes/user_Routes")

const app = express();

// const PORTNUMBER = 7000;
const PORTNUMBER = 8000;
app.listen(PORTNUMBER, () => {
    console.log(`Server is running on portnumber: ${PORTNUMBER}`)
})

dbconnection()
app.get('/apitest',(req, res)=>{
    res.send("HELLO SERVER") //response text from server
})

app.use(cors())
app.use(express.json())
app.use('/user', userroutes)
