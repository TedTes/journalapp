import React,{useState,useEffect} from 'react';
import toBase64 from './ToBase64.js';
export default function UserJournal({data}){
  const[state,setState]=useState(data);

   useEffect(()=>{
        setState(data);
    },[]);

    return state.map(dta=><div key="index">
        <div>{}</div>
        <div>{dta.name}</div>
        <div>{dta.email}</div>
        <div><img src={`data:image/png;base64,${toBase64( dta.img.data)}`}/></div>
    </div>)
  
       
  
}