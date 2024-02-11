import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import UserLookup from './Components/UserLookup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/userlookup" element={<UserLookup />} />
        </Routes>
      </Router>

      <Main />
    </div>
  );
}

export default App;
