import React from 'react'
import "./TeamSidebar.css"


import { SlUser } from 'react-icons/sl'
import { MdOutlineMiscellaneousServices, MdCreate, MdOutlineLibraryAdd } from 'react-icons/md'
import { HiOutlineUsers,HiOutlineInboxArrowDown} from 'react-icons/hi'
import { FiInbox,} from 'react-icons/fi'


import { Link } from 'react-router-dom'
import "./TeamSidebar.css"
import { AiFillFolderAdd, AiOutlineFolderAdd, AiOutlineNotification } from 'react-icons/ai'
import { Container } from 'reactstrap'



function TeamSidebar() {
  return (
    <div className='main-admin-sidebar'>
    {/* <Header /> */}
    <Container>

<div className='team-sidebar'>
        
    <div>
        {/* <div className='sidebar-heading'>
            <div className='sidebar-icon'>
                <Link to={'/dashboard'} className='sidebar-icon-link' ><RxDashboard /></Link>
            </div>
            <h5 style={{ margin: "0" }}><Link to={'/dashboard'} style={{ textDecoration: "none", color: "#330867" }}>Dashboard</Link></h5>
        </div> */}
        <div className='team-sidebar-heading'>
            <div className='team-sidebar-icon'>
                <Link to={'/alljobcard'} className='team-sidebar-icon-link'><HiOutlineUsers /></Link>
            </div>
            <h5 className='admin-sidebar-menu' style={{ margin: "0" }}><Link to={'/allservice'} className='sidebar-icon-link'>All Services</Link></h5>
        </div>
        <div className='sidebar-heading'>
            <div className='sidebar-icon'>
                <Link to={'/allcustomers'} className='sidebar-icon-link'>
                    <SlUser /></Link>
            </div>

            <h5  className='team-sidebar-menu' style={{ margin: "0" }}><Link to={'/addservice'} className='sidebar-icon-link'>Add Services</Link></h5>
        </div>

        <div className='sidebar-heading'>
            <div className='sidebar-icon'>
                <Link to={'/allvehicles'} className='sidebar-icon-link'><MdOutlineLibraryAdd/></Link>
            </div>
            <h5  className='admin-sidebar-menu' style={{ margin: "0" }}><Link to={'/enquiries'} className='sidebar-icon-link'>Enquiries</Link></h5>
        </div>

        <div className='sidebar-heading'>
        <div className='sidebar-icon'>
            <Link to={'/allstaffs'} className='sidebar-icon-link'> <AiOutlineNotification/></Link>
        </div>
        <h5   className='admin-sidebar-menu'style={{ margin: "0" }}><Link to={'/viewnotification'} className='sidebar-icon-link'>Notifcation</Link></h5>
    </div>
        <div className='sidebar-heading'>
        <div className='sidebar-icon'>
            <Link to={'/allstaffs'} className='sidebar-icon-link'>  <FiInbox /> </Link>
        </div>
        <h5   className='admin-sidebar-menu'style={{ margin: "0" }}><Link to={'/inbox'} className='sidebar-icon-link'>  Inbox </Link></h5>
    </div>

    </div>
   
    
    
   
</div>
   

</Container>
</div>
  )
}

export default TeamSidebar