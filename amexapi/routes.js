const users = require("./usercontroller.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
module.exports = app => {

    const users= require("./usercontroller.js");

    var router = require("express").Router();
    var type = upload.single('amexvideo');

    router.post("/",users.create);
    router.post("/auth",users.validateUser)
    router.post("/upload",type,users.upload)
    router.get("/", users.home);
    //custom route
    app.use("/api/users", router);
}
