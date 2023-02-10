import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './components/header/Header';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';
import SubCategory from './pages/SubCategory';
import ListCompany from './pages/ListCompany';
import Singleview from './pages/Singleview';
import ConnectToUs from './pages/ConnectToUs';
import AdminLayout from './Layout/admin/AdminLayout';
import AdminSidebar from './components/dashbords/admin/AdminSidebar';
import AdminBanner from './components/dashbords/admin/AdminBanner';
import Allusers from './components/dashbords/admin/Allusers';
import AlleventTeam from './components/dashbords/admin/AlleventTeam';
import Notification from './components/dashbords/admin/Notification';
import AddCategory from './components/dashbords/admin/AddCategory';
import TeamBanner from './components/dashbords/team/TeamBanner';
import TeamAllservice from './components/dashbords/team/TeamAllservice';
import AddService from './components/dashbords/team/AddService';
import Enquiry from './components/dashbords/team/Enquiry';
import Inbox from './components/dashbords/team/Inbox';
import Inboxview from './components/dashbords/team/Inboxview';
import ViewNotification from './components/dashbords/team/ViewNotification';
import Notificationsingle from './components/dashbords/team/Notificationsingle';
import EventTeamSingle from './components/dashbords/admin/EventTeamSingle';
import EnquiryForm from './components/enquryform/EnquiryForm';
import Login from './components/login/Login';
import SignUser from './components/siginupUser/SignUser';
import SignTeam from './components/signteam/SignTeam';

function App() {
  return (
    <>
    


   
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='subcategory' element={<SubCategory />} />
<Route exact path='listcompany' element={<ListCompany />} />
<Route exact path='singleview' element={<Singleview />} />
<Route exact path='connectus' element={<ConnectToUs />} />
<Route exact path='admindash' element={< AdminBanner/>} />
<Route exact path='allusers' element={< Allusers />} />
<Route exact path='allteam' element={< AlleventTeam />} />
<Route exact path='notification' element={<Notification />} />
<Route exact path='addcategory' element={<AddCategory  />} />
<Route exact path='teamdash' element={<TeamBanner />} />
<Route exact path='allservice' element={< TeamAllservice />} />
<Route exact path='addservice' element={< AddService />} />
<Route exact path='enquiries' element={<Enquiry />} />
<Route exact path='inbox' element={<Inbox />} />
<Route exact path='inboxview' element={<Inboxview />} />
<Route exact path='viewnotification' element={<ViewNotification />} />
<Route exact path='notificationsingle/:id' element={<Notificationsingle/>} />
<Route exact path='eventteamsingle' element={<EventTeamSingle />} />
<Route exact path='enquiryform' element={<EnquiryForm />} />
<Route exact path='login' element={<Login />} />
<Route exact path='signuser' element={<SignUser />} />
<Route exact path='signteam' element={<SignTeam/>} />
</Routes>

</BrowserRouter>
    
    
    </>
    
  );
}

export default App;
