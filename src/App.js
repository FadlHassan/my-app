import 'App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { checkAdminStatus } from 'services/admin.service';
import LandingView from 'components/views/landing-view/LandingView';
import BlogView from 'components/views/blog-view/BlogView';
import AdminView from 'components/views/admin-view/AdminView';
import ArticleView from 'components/views/article-view/ArticleView';
import ContactView from 'components/views/contact-view/ContactView';
import AboutView from 'components/views/about-view/AboutView';
import HeaderBar from 'components/header-bar/HeaderBar';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus().then(setIsAdmin);
  }, []);

  return (
    <Router>
        <div className='scrollContainer'>
        <HeaderBar />
          <Routes>
            <Route exact path = "/" element={<LandingView/>} />
            <Route exact path = "/blog" element={<BlogView/>} />
            <Route exact path = "/article" element={<ArticleView/>} />
            <Route exact path = "/contact" element={<ContactView />} />
            <Route exact path = "/about" element={<AboutView />} />
            { isAdmin ? <Route exact path = "/admin" element={<AdminView />} /> : null }
          </Routes> 
        </div>
    </Router>   
);
};

export default App;
 