import './App.css';
import Create from './container/Create';
import Read from './container/Read';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Update from './container/Update';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Create/>}/>
    <Route path='/read' element={<Read />}/>
    <Route path='/update' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
