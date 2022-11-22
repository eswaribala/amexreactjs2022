module.exports = app => {

    const users= require("./usercontroller.js");

    var router = require("express").Router();


    // Retrieve all Tutorials
    router.get("/", users.home);

    app.use("/api/users", router);
}
