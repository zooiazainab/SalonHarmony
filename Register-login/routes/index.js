const express = require('express');
const  path = require('path');
const router = express.Router();
const bcrypt = require('bcrypt');
const users_collections = require('./config')
require('./mongo_connection')


router.get('/',(req,resp)=>{
    resp.render("signup");
});

router.get('/login',(req,resp)=>{
    resp.render("login");
});
router.post('/',async(req,res)=>{

    const data = {
        number: req.body.number,
        password: req.body.password
    }
    // console.log(req.body);
    const existuser = await users_collections.findOne({number: data.number});
    if(existuser){
        res.send("user already exit");
    };
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedpassword;
    // let req_data = new users_collections(data);
    // console.log(req_data);
    // req_data.save();
    const userdata = await users_collections.insertMany(data);
    res.render('index');
});

router.post('/login', async(req,res)=>{
    console.log("hello1");
    try{
        const loginData = {
            number: req.body.number,
            password: req.body.password
          };
          console.log('Received loginData:', loginData);
          // Check if the user exists
          const user = await users_collections.findOne({ number: loginData.number });
          if (!user) {
            return res.status(401).send('Invalid username or password');
          }
          // Compare the provided password with the hashed password in the database
          const passwordMatch = await bcrypt.compare(loginData.password, user.password);
          if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
          }
          res.render('index');
    }catch(error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
});

/*app.post('/',async(req,res)=>{
    const data = {
        number: req.body.number,
        password: req.body.password
    };
    // check if already user exist
    const existuser = await users_collections.findOne({number: data.number});
    if(existuser){
        res.send("user already exit");
    };
    // hash password bcrypt
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedpassword;
    const userdata = await users_collections.insertMany(data);
    console.log(userdata);
});

/*app.post("/login", async(req,res) => {
    console.log("hello1");

    try{
        const loginData = {
            number: req.body.number,
            password: req.body.password
          };
          console.log('Received loginData:', loginData);
          // Check if the user exists
          const user = await users_collections.findOne({ number: loginData.number });
          if (!user) {
            return res.status(401).send('Invalid username or password');
          }
          // Compare the provided password with the hashed password in the database
          const passwordMatch = await bcrypt.compare(loginData.password, user.password);
          if (!passwordMatch) {
            return res.status(401).send('Invalid username or password');
          }
          res.send('Login successful');
    }catch(error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    
});
 /*app.post("/login", async(req,res)=>{
    try{
        const check = await users_collections.findOne({name: req.body.name});
        if(!check) {
            console.log("hello");
            res.send("user cannot found");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch) {
            console.log("hello2");
            res.render("home");
        }else {
            req.send("wrong password");
        }
    }catch {
        console.log("hello3");
        res.send("wrong details");
    }
 });*/

module.exports = router;