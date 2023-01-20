import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './components/header/Header';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';
import SubCategory from './pages/SubCategory';
import ListCompany from './pages/ListCompany';

function App() {
  return (
    <>
    


   
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
<Route exact path='subcategory' element={<SubCategory />} />
<Route exact path='listcompany' element={<ListCompany />} />
</Routes>

</BrowserRouter>
    
    
    </>
    
  );
}

export default App;
