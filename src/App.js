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
  if (process.env.NODE_ENV === 'development') {
    localStorage.setItem('isAdmin', 'true');
  }
  
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus().then(setIsAdmin);
  }, []);

  return (
    <Router>
      <Routes>
        { isAdmin && <Route path="/admin" element={<AdminView />} /> }
        <Route path="/*" element={
          <div className='scrollContainer'>
            <HeaderBar />
            <Routes>
              <Route path="/" element={<LandingView />} />
              <Route path="/blog" element={<BlogView />} />
              <Route path="/article" element={<ArticleView />} />
              <Route path="/contact" element={<ContactView />} />
              <Route path="/about" element={<AboutView />} />
            </Routes>
          </div>
        } />
      </Routes>
    </Router>   
);
};

export default App;
 