import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingView from './components/views/landing-view/LandingView';
import BlogView from './components/views/blog-view/BlogView';
import ArticleView from './components/views/article-view/ArticleView';
import ContactView from './components/views/contact-view/ContactView';
import AboutView from './components/views/about-view/AboutView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<LandingView/>} />
          <Route exact path = "/blog" element={<BlogView/>} />
          <Route exact path = "/article" element={<ArticleView/>} />
          <Route exact path = "/contact" element={<ContactView />} />
          <Route exact path = "/about" element={<AboutView />} />
        </Routes> 
      </Router>
    </div>
  );
};

export default App;
 