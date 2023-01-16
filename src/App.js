import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './components/header/Header';
import { Button } from 'react-bootstrap';
import Home from './pages/Home';

function App() {
  return (
    <>
    


   
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home />} />
</Routes>

</BrowserRouter>
    
    
    </>
    
  );
}

export default App;
