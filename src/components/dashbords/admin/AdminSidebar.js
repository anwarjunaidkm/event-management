import React from 'react'
import { Container } from 'reactstrap'
import Header from '../../header/Header'
import { avatar3 } from '../../image/image'
import { RxDashboard } from 'react-icons/rx'
import { BiIdCard } from 'react-icons/bi'
import { SlUser } from 'react-icons/sl'
import { RiCarWashingLine } from 'react-icons/ri'
import { MdOutlineMiscellaneousServices, MdCreate, MdOutlineLibraryAdd } from 'react-icons/md'
import { FaPeopleCarry, FaUsers } from 'react-icons/fa'
import { HiOutlineUsers} from 'react-icons/hi'

import { BiStore } from 'react-icons/bi'
import { BsCardList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./AdminSidebar.css"
import { AiFillFolderAdd, AiOutlineFolderAdd, AiOutlineNotification } from 'react-icons/ai'

function AdminSidebar() {
  return (
    <div className='main-admin-sidebar'>
            {/* <Header /> */}
            <Container>
       
        <div className='sidebar'>
                
            <div>
                {/* <div className='sidebar-heading'>
                    <div className='sidebar-icon'>
                        <Link to={'/dashboard'} className='sidebar-icon-link' ><RxDashboard /></Link>
                    </div>
                    <h5 style={{ margin: "0" }}><Link to={'/dashboard'} style={{ textDecoration: "none", color: "#330867" }}>Dashboard</Link></h5>
                </div> */}
                <div className='sidebar-heading'>
                    <div className='sidebar-icon'>
                        <Link to={'/alljobcard'} className='sidebar-icon-link'><HiOutlineUsers /></Link>
                    </div>
                    <h5 className='admin-sidebar-menu' style={{ margin: "0" }}><Link to={'/allusers'} className='sidebar-icon-link'>All User</Link></h5>
                </div>
                <div className='sidebar-heading'>
                    <div className='sidebar-icon'>
                        <Link to={'/allcustomers'} className='sidebar-icon-link'>
                            <SlUser /></Link>
                    </div>

                    <h5  className='admin-sidebar-menu' style={{ margin: "0" }}><Link to={'/allteam'} className='sidebar-icon-link'>All Event Team</Link></h5>
                </div>

                <div className='sidebar-heading'>
                    <div className='sidebar-icon'>
                        <Link to={'/allvehicles'} className='sidebar-icon-link'><MdOutlineLibraryAdd/></Link>
                    </div>
                    <h5  className='admin-sidebar-menu' style={{ margin: "0" }}><Link to={'/addcategory'} className='sidebar-icon-link'>Add Category</Link></h5>
                </div>

                <div className='sidebar-heading'>
                <div className='sidebar-icon'>
                    <Link to={'/allstaffs'} className='sidebar-icon-link'> <AiOutlineNotification/></Link>
                </div>
                <h5   className='admin-sidebar-menu'style={{ margin: "0" }}><Link to={'/notification'} className='sidebar-icon-link'>Publish Notifcation</Link></h5>
            </div>

            </div>
           
            
            
           
        </div>
           
        
        </Container>
    </div>
  )
}

export default AdminSidebar