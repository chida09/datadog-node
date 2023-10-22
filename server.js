'use strict';

const express = require('express');
const datadogLog = require("./logger.js")
require('dd-trace').init({
    logInjection: true,
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    datadogLog.logger.info("datadogLog: Hello World");
    console.log("console: Hello World!!!");

    res.send('send: Hello World');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
