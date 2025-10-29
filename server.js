"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var api_middleware_1 = require("./api-middleware");
var app = express();
var port = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// API Middleware
(0, api_middleware_1.apiMiddleware)(app);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, function () {
    console.log("Server is listening on port ".concat(port));
});
