const express = require('express');
const mongoose = require('mongoose');
const devuser = require('./devusermodel');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const review = require('./reviewmodel');
const cors = require('cors');
const app = express();


//mongodb connection
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://RJ:RJ@cluster0.tm3fiub.mongodb.net/?retryWrites=true&w=majority').then(
    ()=> console.log('DB Connected')
).catch(err => console.log(err));


//handling post() request
app.use(express.json());
//using cors package
app.use(cors({origin:'*'}));

//Hello World execution - get() method
app.get('/',(req,res)=>{
    res.send('<h2>Hello World</h2>');
})

//post() method /register route
app.post('/register',async(req,res)=>{
    try {
        const {fullname,email,mobile,skill,password,confirmPassword} = req.body;
        const exist = await devuser.findOne({email});
        if(exist){
            return res.status(400).send('User Already Registered');
        }

        if(password!=confirmPassword){
            return res.status(400).send('Invalid Password');
        }

        let newUser = new devuser({
            fullname,email,mobile,skill,password,confirmPassword
        });
        newUser.save();
        return res.status(200).send('User Registered');
    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

// post() method /login route
app.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const exist = await devuser.findOne({email});
        if(!exist){
            return res.status(400).send('User Not Found');
        }    

        if(exist.password!=password){
            return res.status(400).send('Invalid Password');
        }

        let payload = {
            user : {
                id : exist.id
            }
        }

        jwt.sign(payload,'jwtpassword',{expiresIn:3600000},
        (err,token)=>{
            if(err) throw err
            return res.json(token);
        })

    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

//get() method /allProfiles route
app.get('/allprofiles',middleware,async(req,res)=>{
    try {
        const allProfiles = await devuser.find();
        return res.json(allProfiles);    
    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

//get() method /myProfile route
app.get('/myprofile',middleware,async(req,res)=>{
    try {
        const myProfile = await devuser.findById(req.user.id);
        return res.json(myProfile);    
    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})


//post() method /addReview route
app.post('/addreview',middleware,async(req,res)=>{
    try {
        const {taskWorker,rating} = req.body;
        const user = await devuser.findById(req.user.id);
        let newRating = new review({
            taskProvider : user.fullname,
            taskWorker,rating
        })
        newRating.save();
        return res.status(200).send('review added successfully');
    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})

//get() method /myReview route
app.get('/myreview',middleware,async(req,res)=>{
    try {
        const allReviews = await review.find();
        const myReview = allReviews.filter(review => review.taskWorker.toString() === req.user.id.toString());
        return res.status(200).json(myReview);    
    } 
    catch (err) {
        console.log(err);
        return res.status(500).send('Server Error');
    }
})


app.listen(5000,()=>console.log('Server Running...'));