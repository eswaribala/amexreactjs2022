const config = require("config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const host = config.get('mongoserver.url');
const db = {};
db.mongoose = mongoose;
db.url = host;
db.user = require("./models.js")(mongoose);
//exporting db configuration
module.exports = db;
