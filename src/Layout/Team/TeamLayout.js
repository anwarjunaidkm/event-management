import React from 'react'
import TeamSidebar from '../../components/dashbords/team/TeamSidebar'
import HeaderDash from '../../components/header/HeaderDash'

function TeamLayout({children}) {
  return (
    <div>
        
        <HeaderDash />
        <div style={{display:'flex'}}>
        

            <TeamSidebar />
            
          <div className='w-100'>

          {children}
          </div>

        </div>
    </div>
   
  )
}

export default TeamLayout