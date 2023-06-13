import React,{useEffect,useState} from 'react'
import Layout from '../../component/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios';
import AdminMenu from '../../component/Layout/AdminMenu'
import CategoryForm from '../../component/Form/CategoryForm';
import {Modal} from "antd"

const CreateCategory = () => {
  const [category,setCategories]=useState([])
  const[name,setName]=useState("")
  const[visible,setvisible]=useState(false);
  const[selected,setSelected]=useState(null);
  const[updateName,setUpdatedName]=useState('')
  // handleform
const handleSubmit= async(e)=>{
  e.preventDefault()
  try{
    const{data}= await axios.post('/api/v1/category/create-category',{
      name
    });

    if (data?.success) {
      toast.success(`${name} is created`);
      getAllCategory();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("somthing went wrong in input form");
  }
};




  //get all cat
  const getAllCategory=async()=>{
    try {
      const {data} =await axios.get("/api/v1/category/get-category")
      if(data?.success){
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error)
      toast.error("something went wrong in gatting category")
    }
  };
useEffect(()=>{
getAllCategory();
},[])

//update category//
const handleUpdate=async(e)=>{
  e.preventDefault()
  try{
    const {data}=await axios.put(`/api/v1/category/update-category/${selected._id}`,{name:updateName})
    if(data.success){
      toast.success(`${updateName} is updated`)
      setSelected(null)
      setUpdatedName("");
      setvisible(false);
      getAllCategory();
    }else{
      toast.error(data.message)
    }
  }catch(error){
  toast.error("samething went wrong");
}
};

//delete category//
const handleDelete=async(pid)=>{
  
  try{
    const {data}=await axios.delete(`/api/v1/category/delete-category/${pid}`,
    {name:updateName})
    if(data.success){
      toast.success(`category is deleted`)
      getAllCategory();
    }else{
      toast.error(data.message)
    }
  }catch(error){
  toast.error("samething went wrong");
}
};
return (
    <Layout title={"dashboard-Category"}>
       <div className='container-fluid m-3 p-3'>

        <div className='row'>
        <div className='col-md-3'>
            <AdminMenu/>
        </div>
        <div className='col-md-9'>
        <h1>Mannege Category</h1>
        <div className="p-3 w-50" >
          <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName}/>
        </div>
       <div className='w-75'>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  
  {category.map((c)=>(
    <>
      <tr>
      <td key={c._id}>{c.name}</td>
      <td>
      <button className='btn btn-primary ms-3' 
      onClick={()=>{
        setvisible(true);
      setUpdatedName(c.name);
      setSelected(c)
      }}
      >
      Edit
      </button>
      <button className='btn btn-danger ms-3' onClick={()=>{handleDelete(c._id)}}>
      Delete
      </button>

      </td>
     </tr>
      </>  
      ))}
</tbody>
</table>
</div>
<Modal onCancel={()=>setvisible(false)}

 footer={null}
  visible={visible} 
   >
    <CategoryForm value={updateName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>
   </Modal>
</div>
</div>
</div>
</Layout>
  );
};

export default CreateCategory
