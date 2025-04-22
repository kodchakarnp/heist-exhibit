import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MyGallery from "./pages/MyGallery";
import ArtPieceDetail from "./pages/ArtPieceDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col text-white">
      <Router basename={import.meta.env.DEV ? "/" : "/heist-exhibit/"}>
        <main className="flex-1 w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-gallery" element={<MyGallery />} />
            <Route path="/artpiece/:id" element={<ArtPieceDetail />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
