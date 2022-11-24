const users = require("./usercontroller.js");
const multer = require("multer");

//const upload = multer({ dest: "uploads/" });
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
});

module.exports = app => {

    const users= require("./usercontroller.js");

    var router = require("express").Router();
    // Multer Filter
    const multerFilter = (req, file, cb) => {
        var ext=file.mimetype.split("/")[1];

        if ((ext === "mp4")||(ext === 'ogg')||(ext==='ogv'))
           {
            cb(null, true);
        } else {
            cb(new Error("Not a Video File!!"), false);
        }
    };
    //customizing storage and filter
    const upload = multer({
        storage: multerStorage,
        fileFilter: multerFilter,
    });
    var type = upload.single('amexvideo');
    router.post("/",users.create);
    router.post("/auth",users.validateUser)
    router.post("/upload",type,users.upload)
    router.get("/videos", users.videos);
    router.post("/videosbyid", users.videobyid);
    router.post("/channels",type,users.channelCreate)
    //custom route
    app.use("/api/users", router);
}
