import React,{useState} from 'react';
import Layout from '../../component/Layout/Layout';
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import axios from 'axios'
const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("")
    const[answer,setanswer]=useState("")

    const navigate =useNavigate()

//form//
const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const res= await axios.post(`/api/v1/auth/register`,{
        name,
        email,
        password,
        phone,
        address,
        answer,
      }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/Login");
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
}


  return (
    <Layout title="register with us">
      <div className='form-container'>
     <form onSubmit={handleSubmit}>
     <h4 className='title'>REGISTER FORM</h4>
    <div className="mb-3">
    <input 
    type="text" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter your Name'
    required
    />
    </div>

    <div className="mb-3">
    <input 
    type="text" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter Email'
    required
    />
    </div>
    

  <div className="mb-3">
    <input 
    type="password" 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    className="form-control"
     id="exampleInputPassword1" 
        placeholder='Enter password'
        required
     />
     </div>


  <div className="mb-3">
    <input 
    type="text" 
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter phon number'
    required
    />
    </div>


  <div className="mb-3">
    <input 
    type="text" 
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter address'
    required
    />
    </div>
    <div className="mb-3">
    <input 
    type="text" 
    value={answer}
    onChange={(e)=>setanswer(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='what is your favorite sport?'
    required
    />
    </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>
  )
}

export default Register
