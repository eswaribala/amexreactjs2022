const express=require("express");
const bodyParser=require('body-parser');
const cors=require('cors');
const config = require('config');
const app=express();
//rest methods get,post,put,delete,patch
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.get("/",function(req,res){
    res.send("hi");
})
//const port = config.get('server.port');
//const host = config.get('server.host');
server=app.listen(4000, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is running on 4000`);
});
