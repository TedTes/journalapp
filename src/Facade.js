import React from 'react';

export default function Facade(){}
Facade.prototype.getElement=(selector)=>{
    return document.querySelector(selector);
}