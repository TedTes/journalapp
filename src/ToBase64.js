import React from 'react';


export default function toBase64(arr){
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
     );
}