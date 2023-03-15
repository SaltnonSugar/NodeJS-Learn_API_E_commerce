'use strict'

const mongoose = require('mongoose')
const { db: { host, name, port } } = require('../configs/config.mongodb')
// if "localhost" not run => 127.0.0.1
const connectString = `mongodb://${host}:${port}/${name}`

// Database
class Database {

    constructor() {
        this.connect()
    }
    //connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString).then(_ => console.log(`Connected Success Mongodb`))
            .catch(err => console.log(`Error Connect!`))

    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
