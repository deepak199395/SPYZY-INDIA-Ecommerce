import React, { useState, useEffect } from "react";
import Layout from '../../component/Layout/Layout';
import UserMenu from '../../component/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
//context
const [auth,setAuth]= useAuth()
  const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[address,setAddress]=useState("");
    //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);
    //form//
const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const {data}= await axios.put(`/api/v1/auth/profile`,{
        name,
        email,
        password,
        phone,
        address,
        });
      if(data?.error){
        toast.error(data?.error)
      }else{
        setAuth({...auth,user:data?.updatedUser});
        let ls= localStorage.getItem("auth");
        ls=JSON.parse(ls)
        ls.user=data.updatedUser
        localStorage.setItem('auth',JSON.stringify(ls));
        toast.success('profile Updated sucsesfully');
      }

    } catch (error) {
      console.log(error)
      toast.error("something went wrong")
    }
}
  return (
    <Layout title={"your profine"}>
      <div className="container-fluid.m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-9">
            <div>
            <form onSubmit={handleSubmit}>
     <h4 className='title'>USER PROFILE</h4>
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
    disabled
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
    
    
    />
    </div>
    


  <button type="submit" className="btn btn-primary">UPDATE</button>
</form>

               </div>
            </div>
         </div>
      </div>
    </Layout>
  )
}

export default Profile
