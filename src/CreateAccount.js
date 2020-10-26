
import React from 'react';
import './App.css'
import {useHistory} from 'react-router-dom';
import Facade from './Facade.js'
import Validate from './Validate';
import axios from 'axios';


export default function CreateAccount(){
   const history=useHistory();
   const handleCancel=()=>{
   history.push('/')
    }
    const handleSubmit=()=>{
      const facade=new Facade();
      const name= facade.getElement('#name');
       const email= facade.getElement('#email');
       const password=facade.getElement('#pwd1')
       const password2=facade.getElement('#pwd2');
       const register=facade.getElement('#register');
       const data={email,password, password2}
       const errorMsg=Validate(data);
        console.log("errorMsg");
        console.log(errorMsg);
       facade.getElement('#pwd2Msg').innerText=errorMsg['pwd2'] || ''
       facade.getElement('#pwd1Msg').innerText=errorMsg['pwd1'] || ''
       facade.getElement('#emailMsg').innerText=errorMsg['email'] || ''
       const file=facade.getElement('input[type=file]').files[0];
     if(Object.keys(errorMsg).length===0){
       readFileAndSend(file,function(img){
        axios.post('/register',{
          name:name.value,
          email:email.value,
          password:password.value,
          img:img
          }).then((res)=>{
        if(res.data){
              register.reset();
              history.push('/login');
        }
       }).catch(e=>console.log(e));
    }
      );
     }
  }
return <div>

<div>
    <h2>Create Account</h2>
    <form className="register" id="register">
    <input type="text" name="username" id="name" placeholder="enter username" required autoFocus/>
    <input type="email" id='email' name="email" placeholder="Enter your email" required/>
    <label className="alertMsg" id='emailMsg'></label>
    <input type="password" id='pwd1' name="password" placeholder="Enter your password"required/>
    <label className="alertMsg" id='pwd1Msg'></label>
    <input type="password" id='pwd2' name="password" placeholder="Confirm your password"required/>
    <label className="alertMsg" id='pwd2Msg'></label>
     <input type="file" id="img" name="img" accept="image/*" />
     <div><button type="button" style={{background:"white",color:"black"}} onClick={handleCancel}>Cancel</button>  <button type="button" onClick={handleSubmit}>Sign Up</button></div>  
</form>
   </div>
   
</div>
}



function readFileAndSend(file,callback){
  if(file!==undefined){
    const reader=new FileReader();
    reader.addEventListener("load", function () {
      callback(reader.result);
      }, false);
    
      if (file) {
        reader.readAsDataURL(file); 
      }
  }
 return;
    }
