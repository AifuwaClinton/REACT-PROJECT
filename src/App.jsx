import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
import Header from './Components/Header.jsx';
import Middle from './Components/Middle .jsx';
import Footer from './Components/Footer.jsx';
// import Student from './student.jsx';
import Spinner from './Components/Spinner.jsx';
import Navbar from './Context/Navbar.jsx';
import About from './About.jsx';
import Contact from './Components/Contact.jsx';
import Blog_post from './Components/Blog_post.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <BrowserRouter>
        <Header /><br />

        <Routes>
          <Route path="/" element={
            <>
              <Home /><br />
              <Middle />
              <Blog_post /><br />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer /><br /><br /><br />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;

