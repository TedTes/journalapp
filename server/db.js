require('dotenv').config();
const mongoose=require('mongoose');


mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(res=>console.log('db connected')).catch(e=>console.log(e));


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    img:Buffer
})

const User=mongoose.model('session',userSchema);


module.exports={
    User
}