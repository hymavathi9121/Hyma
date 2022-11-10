// import React from "react";
// import {useForm} from "react-hook-form";
// export default function Form() {
    // const {register, formState: {errors}, handleSubmit,}=useForm();
    // const onSubmit=(data) => console.log(data);
    // return <div>
        // <form onSubmit={handleSubmit(onSubmit)}>
            // <div>
                // <h1>Submit Profile</h1>
            // </div>
            // <div>
                // <label>Name</label>
                // <input type="Name" 
                // {...register("name",{required: true})}/>
                // <error>
                    // {errors.name?.type==="required" && "Name is required"}
                // </error>
            // </div>
            // <div>
                // <label>Mobile Number</label>
                // <input type="number" />
                // <div>
                    // <label>
                        //  Password
                    // </label>
                    // <input type="password" />
                    // <div>
                        // <label>
                            // userName
                        // </label>
                        // <input type="userName" />
                    // </div>
                    // <div>
                        // <input className="buttons" type="Submit" />
                    // </div>
                // </div>
            // </div>
        // </form>
    // </div>
// }
import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './form.css'
//import Output from './Output';
 function Form() {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then( (response)=>{
      // history.replace("/").
      navigate("/Display");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return (
    <div className='Form'>
      <form onSubmit={submitHandler}>
        <div>
        <h1>Submit Profile</h1>
        </div>
        <div className='mani'>
        <div>
        <span>Name</span><br/>
        <input type='text' name='name' value={name} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Email</span><br/>
        <input type='email' name='email'value={email} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Password</span><br/>
        <input type='password' name='password' value={password} onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>MobileNumber</span><br/>
        <input type='number' name='mobileNum' value={mobileNum } onChange={changeHandler}/>
        </div>
        <br/>
        <div>
        <span>Username</span><br/>
        <input type='username' name='username' value={username} onChange={changeHandler}/>
        </div>
        <br/>
        <button>Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Form;






















