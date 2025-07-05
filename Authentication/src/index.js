const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index')

const { PORT } = require('./config/serverConfig');

const app = express();

const setupAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen( PORT, async() => {
        console.log(`Server started at port ${PORT}`);
    })
}

setupAndStartServer();