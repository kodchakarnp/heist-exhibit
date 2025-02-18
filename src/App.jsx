import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import MyGallery from './pages/MyGallery'
import ArtPieceDetail from './pages/ArtPieceDetail'
import Header from './components/Header';


function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-gallery" element={<MyGallery />} />
    </Routes>
  </Router>
);
  //   <div className='w-full min-h-screen bg-blue-600'>
  //     <Header />
  //     {/* HellooooooooooooooHellooooooooooooooHellooooooooooooooHellooooooooooooooHellooooooooooooooHellooooooooooooooHellooooooooooooooHelloooooooooooooo */}
  //     < Home />
  //     {/* < MyGallery /> */}
  //     {/* <ArtPieceDetail/> */}
  //   </div>
  // )
}

export default App
