import { useState, useEffect } from "react";
import SearchBox from "../api/SearchBox";  // 👈 นำเข้า Component
import { Link } from "react-router-dom";


export default function ExploreArt() {
  const [artworks, setArtworks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // 🍄 คีย์เวิร์ดยอดนิยม
  const popularKeywords = ["Van Gogh", "Leonardo da Vinci", "Monet", "Picasso", "Rembrandt"];

  function getRandomKeyword() {
    return popularKeywords[Math.floor(Math.random() * popularKeywords.length)];
  }

  async function fetchArtworks(keyword, currentPage = 1) {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`
    );
    const data = await response.json();
    if (data.objectIDs) {
      const artDetails = await Promise.all(
        data.objectIDs.slice((currentPage - 1) * 9, currentPage * 9).map(async (id) => {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          return res.json();
        })
      );

      setArtworks(currentPage === 1 ? artDetails : [...artworks, ...artDetails]);
    }
  }

  // Initial load
  useEffect(() => {
    fetchArtworks(getRandomKeyword());
  }, []);

  // Handle page changes
  useEffect(() => {
    if (page > 1) {
      fetchArtworks(query || getRandomKeyword(), page);
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchArtworks(query);
  };

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  // 🔹 ฟังก์ชันขโมยภาพ (บันทึกลง localStorage)
  const stealArtwork = (art) => {
      // 1. Get current gallery from localStorage
    const currentGallery = JSON.parse(localStorage.getItem("myGallery")) || [];
      // 2. Check if artwork already exists 
    if (!currentGallery.some(item => item.objectID === art.objectID)) {
      // 3. Add artwork to gallery
      const updatedGallery = [...currentGallery, art];
      // 4. Save updated gallery to localStorage
      localStorage.setItem("myGallery", JSON.stringify(updatedGallery));
    }
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-space-grotesk font-bold text-green-400">EXPLORE</h2>
      </div>

      {/* 🔹 ใช้ SearchBox Component */}
      <SearchBox query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {/* 🔹 แสดง Grid ภาพศิลปะ */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {artworks.map((art) => (
          <div key={art.objectID} className="bg-gray-900 p-4 flex flex-col gap-2 text-white">
            <div
              className="w-full h-56 bg-cover bg-center rounded-lg flex justify-center"
              style={{ backgroundImage: `url(${art.primaryImageSmall || "/placeholder.jpg"})` }}
            ></div>
            <h3 className="mt-3 text-lg font-PlusJakartaSans font-semibold flex justify-start text-left truncate-multi">{art.title || "Unknown Title"}</h3>
            <p className="text-gray-400 font-PlusJakartaSans flex justify-start">{art.objectDate || "Unknown Year"}</p>

            {/* 🔹 ปุ่ม Actions */}
            <div className="flex gap-3 justify-center mt-0">
              <Link to={`/artpiece/${art.objectID}`} className="border border-[#F6E9DE] px-3 py-1 text-sm text-[#F6E9DE] font-PlusJakartaSans mt-8">
                👁 View
              </Link>
              <button
                className="border border-green-400 px-3 py-1 text-sm text-[#F6E9DE] font-PlusJakartaSans mt-8"
                onClick={() => stealArtwork(art)}
              >
                Take it
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 ปุ่ม Show More */}
      <div className="text-center mt-8">
        <button
          className="border border-white px-6 py-2 text-sm"
          onClick={handleShowMore}
        >
          Show more
        </button>
      </div>
    </section>
  );
}
