// import npm modules
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const winston = require('winston');
const compression = require('compression');
const expressWinston = require('express-winston');
const winstonPapertrail = require('winston-papertrail');

// initialize the api
const api = express();

// initialize middleware
api.use(cors());
api.use(compression());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// initialize our logger (in our case, winston + papertrail)


// listen on the designated port found in the configuration
api.listen(3001, err => {
        if (err) {
                logger.error(err);
                process.exit(1);
        }

        // require the database library (which instantiates a connection to mongodb)
        require('./db');

        // loop through all routes and dynamically require them – passing api
        fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
                require('./routes/' + file)(api);
        });

        // output the status of the api in the terminal
        console.log(`API is now running on port ${3001}`);
});

module.exports = api;