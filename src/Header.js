import React,{useState,useContext} from 'react';
import {useHistory,Link} from 'react-router-dom';
import {HeaderContext} from './App.js'
import toBase64 from './ToBase64.js'

export default function Header(props){
const context=new useContext(HeaderContext);
    const history=useHistory();
    const clickHandler=(e)=>{
     history.push('/login')
    }
    const logOutUser=()=>{
  props.logOutUser();
      history.push('/');
     
    }
  return   <div>
    <header className="header">
    <div  className="logo"><div style={{fontSize:"1.4em"}}>Logo</div>
    <div><Link style={{color:"white",fontSize:"1.3em",textDecoration:"none"}} to="/">Story</Link></div></div> 
  {context.length!==undefined?
  <div style={{display:"flex" ,alignItems:"center"}}><img style={{width:"50px" ,height:"50px",borderRadius:"50%",marginRight:"1em"}} src={`data:image/png;base64,${toBase64( context[0].img.data)}`}/>
  <div onClick={logOutUser}>Logout</div></div>:
  <div style={{marginRight:"3.7em"}} onClick={clickHandler}>{"Join"}</div>}
    </header>
    <div>
    </div>
   <div>
  </div>
    </div>
   
}