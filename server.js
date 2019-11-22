require("dotenv").config();
const db = require('./backend/config/db')

const port = process.env.port | 4000;

//database connection
db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('DB connected Successfully');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});