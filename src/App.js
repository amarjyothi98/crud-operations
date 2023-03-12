import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './components/update/Update'
import Delete from './components/delete/Delete'


function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <h3>React Crud Operations</h3>
        </div> 

        <div>
          <Routes>
            <Route path='/create' element={<Create/>} />
          </Routes>
       </div>

        <div style={{marginTop: 20}}>
          <Routes>
            <Route path='/read' element={<Read/>} />
          </Routes>
        </div>

       <Routes>
        <Route path='/update' element={<Update/>} />
        <Route path='/delete' element={<Delete/>} />
       </Routes>

      </div>
    </Router>
  );
}

export default App;
