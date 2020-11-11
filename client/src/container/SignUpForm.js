import React from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {postApplicantInfo} from './../redux/actions'

 function SignUpForm() {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
   const allDetails = useSelector(state =>state.allDetails)
const onSubmit =e=>{
  e.preventDefault();
  console.log(user)
  
}
  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
      <input type='email' value ={ user.email} name='email' placeholder='Enter Email' onChange ={e => setUser({...user,[e.target.name]:e.target.value})}/>
      <input type ='password' value ={user.password} name='password' onChange={e => setUser({...user,[e.target.name]:e.target.value})} placeholder='Enter password'/>
       
      <input type='submit' onClick={() => dispatch(postApplicantInfo(user.password, user.email))}/>
       
      
      </form>
    </div>
  )
}



export default SignUpForm;