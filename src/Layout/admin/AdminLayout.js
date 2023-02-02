import React from 'react'
import { Container } from 'reactstrap'
import AdminSidebar from '../../components/dashbords/admin/AdminSidebar'
import HeaderDash from '../../components/header/HeaderDash'

function AdminLayout({children}) {
  return (
    <div>
        
        <HeaderDash/>
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