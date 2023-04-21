import './App.css';

import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

function App() { 


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
