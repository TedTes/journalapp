const {User}=require('./db.js');



async function registerUser(data){
    const binary=Buffer.from(data.img.split(',')[1],"base64");
    data['img']=binary;
  const user=new User(data);
    return await user.save();
}

async function loginUser(user){
const res=await User.findOne({
  email:user.email,password:user.password
})
return res;
}

module.exports={
    registerUser,loginUser
}