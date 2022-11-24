const db = require("./dbserver");
const fs = require("fs");
//const app = require("express");
const express = require("express");
const path = require("path");
app=express()

const User = db.user;
const File =db.file;
const Channel=db.channel;
//insert
exports.create = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a User
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        date:req.body.date,
        country:req.body.country,
        accept:req.body.accept,
        role: "user"
    });


    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        });
};



exports.validateUser=(req,res)=>{
    User.findOne({name: req.body.name}, function(error, foundUser) {
        if(!error) {
            if (foundUser) {
                //----compare passwords-----//
                if (foundUser.password==req.body.password){ //password matches
                    res.send({"message":'user found',"user":foundUser})
                }else{
                    res.send({"message":'user not found'})

                }
                //---end checking password compraison
            } else {
                res.send({"message":"you've not been registered yet"})
            }
        } else {
            res.send(error);
        }
    })
}



exports.upload=(req,res)=>{

    //console.log(req.body);
    var file_name=req.file.filename;
    var file_path=req.file.path;
    var file_size=req.file.size;
    var file_ext=req.file.ext;

    console.log(req.file)
    //res.send({ message: "Successfully uploaded files" });


    // Validate request
    if (!req.file.filename) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a File
    const file = new File({
        fileName: req.file.filename,
        ext: req.file.mimetype,
        path: req.file.path,
        size:req.file.size

    });


    file.save(file)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the File."
            });
        });


}

exports.videos=(req,res)=>{
    const id = req.query.id;


    File.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

exports.videobyid=(req,res)=>{
    File.findOne({name: req.body.fileName}, function(error, foundFile) {
        var options = {
            root: path.join("./public")
        };
        if(!error) {
            if (foundFile) {
               // res.sendFile(foundFile, { root:  "./public"});
                 //   res.send({"message":'file found',"user":foundFile})
                /*res.sendFile(req.body.fileName, options, function (err) {
                    if (err) {
                        next(err);
                    } else {
                        console.log('Sent:', req.body.fileName);
                    }
                });*/

                res.download("./public/"+req.body.fileName);

            } else {
                res.send({"message":"not found"})
            }
        } else {
            res.send(error);
        }
    })
}


//
exports.channelCreate = (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body.channelName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Channel
    const channel = new Channel({
        channelName: req.body.channelName,
        karmaPoints: req.body.karmaPoints,
        description: req.body.description,
        active:req.body.active,

    });


    channel
        .save(channel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Customer."
            });
        });
};
exports.channels=(req,res)=>{



    Channel.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}
