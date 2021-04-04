require('dotenv').config();

const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//require your mongoose connection config file
require("./server/config/mongoose.config")

//require your routes file
require("./server/routes/user.routes")(app)




app.listen(port, () => console.log(`Listening on port ${port}`));