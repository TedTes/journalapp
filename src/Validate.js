import React from 'react';

export default function Validate(data){
    var errorsMsg=[];
    const pwd=data.loginPassword;
    const pwd1=data.password;
    const pwd2=data.password2;
    const email=data.email;
  
    if(pwd2==undefined && (email.validity.valueMissing || email.validity.typeMismatch  || pwd.validity.valueMissing)){
        errorsMsg['loginMsg']='enter valid email or password';
        return errorsMsg;
    }


    if( email.validity.valueMissing || email.validity.typeMismatch )
    errorsMsg['email']='Enter valid email';
   if(pwd2!==undefined&&!pwd2.validity.valueMissing && !pwd1.validity.valueMissing){
       if(pwd1.value!==pwd2.value)
       errorsMsg['pwd2']='passwords do not match'
   }
    if(pwd1!==undefined&&pwd1.validity.valueMissing) {
        errorsMsg['pwd1']='Enter password'
        return errorsMsg;
    }
    if(pwd2!==undefined&&pwd2.validity.valueMissing) errorsMsg['pwd2']='Enter password to confirm'

  return errorsMsg;

}
