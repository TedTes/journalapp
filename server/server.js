require('dotenv').config();
const express=require('express');
const path=require('path');
// const cors=require('cors');
const {loginUser,registerUser} =require('./model.js')
const app=express();

const port=process.env.PORT || 3000;

// app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.json({limit:"50mb"}));
// app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))


app.get('/login',(req,res)=>{
 
    const user=req.query
    loginUser(user).then(dta=>{
     res.send(dta);
    }).catch(e=>console.log(e));
});
app.post('/register',(req,res)=>{
    const data=req.body;
 registerUser(data).then(dta=>{
    if(dta._id)res.send(true);
  }).catch(e=>console.log(e));
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})


