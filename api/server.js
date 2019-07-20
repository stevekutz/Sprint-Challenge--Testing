const express = require('express');

const server = express();

const Games = require('../games/gamesModel');

server.use(express.json());

// sanity check
server.get('/', (req,res) => {
    res.cookie('SPRINTcookie', 'cookieForTestingSprint' );

    res.status(200).json({message: `Sprint TESTING server sanity check !!! `})

});




module.exports = server;