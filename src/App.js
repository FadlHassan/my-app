import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingView from './components/views/landing-view/LandingView';
import BlogView from './components/views/blog-view/BlogView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<LandingView/>} />
          <Route exact path = "/blog" element={<BlogView/>} />
        </Routes> 
      </Router>
    </div>
  );
};

export default App;
 