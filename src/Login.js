import React from 'react';
import './App.css'
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import Facade from './Facade.js'
import Validate from './Validate.js'


export default function Login(props){

  const history=new useHistory();
  const authenticatedUser=(dta)=>{
     props.authenticatedUser(dta);
  }
  const handleCancel=()=>{
    history.push('/')
  }
    const handleSubmit=()=>{
        const facade=new Facade();
        const email=facade.getElement('#email');
          const loginPassword=facade.getElement('#pwd');
          const alertMsg=facade.getElement('#alert-msg');

         const data={email,loginPassword}
         const errorMsg=Validate(data);
      
          if (errorMsg.loginMsg){
           alertMsg.innerText="Enter Valid email or password"
          }
          else{
            const data={email:email.value,password:loginPassword.value}
            axios.get('/login',{
                      params:{
                        email:email.value,
                        password:loginPassword.value
                  }
                }).then(res=>{
                
               if(res.data._id){
               
                authenticatedUser([res.data]);
                history.push('/auth');
               }
               else {
                  alertMsg.innerText="Incorrect Username or password"
                 }
                }).catch(e=>console.log(e));
          }
   
    }
    return <div >
      <div className="login">
      <h2>Login</h2>
         <label className="alertMsg" id="alert-msg"></label>
          <input type="email" id="email" name="email" placeholder="enter your email" required autoFocus/>
          <input type="password" id="pwd" name="passowrd" placeholder="enter your password" required/>
          <div><button style={{background:"white",color:"black"}} onClick={handleCancel}>Cancel</button><button onClick={handleSubmit}>Login</button></div> 
          <div><span>Don't Have account?</span><Link to="/register">create account</Link></div>
      </div>
    </div>
}


