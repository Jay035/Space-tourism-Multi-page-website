import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useEffect, useState } from "react";
import { Home } from './Pages/Home';
import { Destination } from "./Pages/Destination/Destination";
import { Crew } from './Pages/Crew/Crew';
import { Technology } from './Pages/Technology/Technology';
import { Navbar } from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
// import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById('preloader');
  if(preloader){
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    },2000)
  }
  AOS.init()
  return (
    !loading && (
      <Router>
        <div data-aos="fade-in" data-aos-duration="2000" className="App font-Barlow text-accent overflow-x-hidden leading-normal h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>

        </div>
      </Router>
    )
  );
}

export default App;
