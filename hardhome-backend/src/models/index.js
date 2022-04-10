const mongoose = require('mongoose');
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_USERNAME = process.env.ME_CONFIG_MONGODB_ADMINUSERNAME;
const MONGO_PASSWORD = process.env.ME_CONFIG_MONGODB_ADMINPASSWORD
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const mongooseConnectionString = MONGO_CONNECTION_STRING;
// const mongooseConnectionString = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(mongooseConnectionString,{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");