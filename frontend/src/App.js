
import './App.css';
import Header from './components/Header';
import Addstudent from './components/Addstudent';
import Allstudent from './components/Allstudent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (

   <BrowserRouter>
    <Header/>
      <Routes>
     
       
        <Route path="/add" element={<Addstudent/>}></Route>
        <Route path="/" element={<Allstudent/>}></Route>
     
        
      </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
