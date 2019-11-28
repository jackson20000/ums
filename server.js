require("dotenv").config();
const db = require('./backend/config/db')
const express = require('express')
const app = express()
const bodyparser = require("body-parser");
const cors = require('cors')
const serverRoutes = require('./backend/routes/router');

//database connection
db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('DB connected Successfully');
});


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Api routes
app.use('/api',cors(),serverRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server start running on port ${port}`);
});