import { useState, useEffect } from "react";
import SearchBox from "../api/SearchBox";  // 👈 นำเข้า Component
import { Link } from "react-router-dom";


export default function ExploreArt() {
  const [artworks, setArtworks] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // 🔹 คีย์เวิร์ดยอดนิยม
  const popularKeywords = ["Van Gogh", "Leonardo da Vinci", "Monet", "Picasso", "Rembrandt"];

  useEffect(() => {
    fetchArtworks(getRandomKeyword());
  }, []);

  function getRandomKeyword() {
    return popularKeywords[Math.floor(Math.random() * popularKeywords.length)];
  }

  async function fetchArtworks(keyword, pageNum = 1) {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}`
    );
    const data = await response.json();

    if (data.objectIDs) {
      const artDetails = await Promise.all(
        data.objectIDs.slice((pageNum - 1) * 9, pageNum * 9).map(async (id) => {
          const res = await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          );
          return res.json();
        })
      );

      setArtworks(pageNum === 1 ? artDetails : [...artworks, ...artDetails]);
    }
  }

  const handleSearch = () => {
    setPage(1);
    fetchArtworks(query);
  };

  const handleShowMore = () => {
    setPage((prev) => prev + 1);
    fetchArtworks(query || getRandomKeyword(), page + 1);
  };

  // 🔹 ฟังก์ชันขโมยภาพ (บันทึกลง localStorage)
  const stealArtwork = (art) => {
    const currentGallery = JSON.parse(localStorage.getItem("myGallery")) || [];
    if (!currentGallery.some(item => item.objectID === art.objectID)) {
      const updatedGallery = [...currentGallery, art];
      localStorage.setItem("myGallery", JSON.stringify(updatedGallery));
    }
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-green-400">EXPLORE</h2>
      </div>

      {/* 🔹 ใช้ SearchBox Component */}
      <SearchBox query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {/* 🔹 แสดง Grid ภาพศิลปะ */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {artworks.map((art, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg">
            <div
              className="w-full h-56 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${art.primaryImageSmall || "/placeholder.jpg"})` }}
            ></div>
            <h3 className="mt-3 text-lg font-semibold">{art.title || "Unknown Title"}</h3>
            <p className="text-gray-400">{art.objectDate || "Unknown Year"}</p>

            {/* 🔹 ปุ่ม Actions */}
            <div className="mt-3 flex justify-between">
              <Link to={`/artpiece/${art.objectID}`} className="border border-white px-3 py-1 text-sm">
                👁 View
              </Link>
              <button
                className="border border-green-400 px-3 py-1 text-sm text-green-400"
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
