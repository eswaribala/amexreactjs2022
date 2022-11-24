const config = require("config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const host = config.get('mongoserver.url');
const db = {};
db.mongoose = mongoose;
db.url = host;
db.user = require("./models/usermodel")(mongoose);
db.file=require("./models/filemodel")(mongoose);
db.channel=require("./models/channelmodel")(mongoose);
//exporting db configuration
module.exports = db;
