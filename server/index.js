const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const appRoutes = require('./routes.js');
const db = require('./db/indexdb.js')



//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use(appRoutes);

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
