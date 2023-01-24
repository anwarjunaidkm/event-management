import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
{/* <Route exact path='admin' element={< AdminSidebar />} /> */}
<Route exact path='admin' element={< AdminBanner/>} />
<Route exact path='allusers' element={< Allusers />} />
<Route exact path='allteam' element={< AlleventTeam />} />
<Route exact path='notification' element={<Notification />} />
<Route exact path='addcategory' element={<AddCategory  />} />
</Routes>

</BrowserRouter>
    
    
    </>
    
  );
}

export default App;
