import React from 'react'
import TeamSidebar from '../../components/dashbords/team/TeamSidebar'
import Header from '../../components/header/Header'

function TeamLayout({children}) {
  return (
    <div>
        
        <Header />
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