import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";

import useCategory from '../hooks/useCategory';
import Layout from '../component/Layout/Layout'
    const Categories = () => {
        const categories = useCategory();
  return (
    <Layout title={"all categories"}>
<div className="container">
    <div className="row">
    {categories.map(c=>(
        <div className="col-md-6 mt-5 mb-3 gx-3 gy-3" key={c._id}>
            <button> <Link to={`/category/${c.slug}`}>{c.name}</Link></button>
        </div>
    ))}
        <div className="col-md">
            <button className='btn btn-primary text-light'> 
            <Link to="/">{categories.name}</Link></button>
        </div>
    </div>
</div>
    </Layout>
  )
}

export default Categories