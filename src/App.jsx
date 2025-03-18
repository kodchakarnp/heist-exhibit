import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import MyGallery from './pages/MyGallery'
import ArtPieceDetail from './pages/ArtPieceDetail'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  return (
    <div className='min-h-screen w-full flex flex-col text-white'>
      <Router>
        <main className="flex-1 w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-gallery" element={<MyGallery />} />
            <Route path="/artpiece/:id" element={<ArtPieceDetail />} />
          </Routes>
          < Footer />
        </main>
      </Router>
    </div>
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
