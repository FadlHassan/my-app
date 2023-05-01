import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingView from './components/views/landing-view/LandingView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<LandingView/>} />
        </Routes> 
      </Router>
    </div>
  );
};

export default App;
 