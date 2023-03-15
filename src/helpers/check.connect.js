'use strict'
const mongoose = require('mongoose')

// count connection
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections::${numConnection}`);
}

// checkoverload


module.exports = {
    countConnect
}
