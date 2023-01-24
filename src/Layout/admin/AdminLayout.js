import React from 'react'
import { Container } from 'reactstrap'
import AdminSidebar from '../../components/dashbords/admin/AdminSidebar'
import Header from '../../components/header/Header'

function AdminLayout({children}) {
  return (
    <div>
        
        <Header />
        <div style={{display:'flex'}}>
        

            <AdminSidebar />
            
          <div className='w-100'>

          {children}
          </div>

        </div>
    </div>
  )
}

export default AdminLayout