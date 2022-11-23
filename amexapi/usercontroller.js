const db = require("./dbserver");
const fs = require("fs");
//const app = require("express");
const express = require("express");
app=express()

const User = db.user;
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
        accept:req.body.accept
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









exports.home=(req,res)=>{
    res.send("Rocking with Rest API!")
}
