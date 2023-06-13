import React from 'react'
import Layout from '../../component/Layout/Layout'
import AdminMenu from '../../component/Layout/AdminMenu'

const User = () => {
  return (
    <Layout title={"dashboard-all user"}>
       <div className='container-fluid m-3 p-3'>

    <div className='row'>
        <div className='col-md-3'>
            <AdminMenu/>
        </div>
        <div className='col-md-9'>
        <h1>  All users</h1>

        </div>
    </div>
      </div>
    </Layout>
  )
}

export default User
