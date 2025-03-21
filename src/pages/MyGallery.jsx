import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function MyGallery() {
  const [gallery, setGallery] = useState([]);

  // 🔹 โหลดข้อมูลจาก localStorage ตอนเปิดหน้า
  useEffect(() => {
    const savedGallery = JSON.parse(localStorage.getItem("myGallery")) || [];
    setGallery(savedGallery);
  }, []);

  // 🔹 ฟังก์ชันลบภาพออกจาก My Gallery
  const removeFromGallery = (artId) => {
    const updatedGallery = gallery.filter((art) => art.objectID !== artId);
    setGallery(updatedGallery);
    localStorage.setItem("myGallery", JSON.stringify(updatedGallery));
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-start py-16 bg-black">
      <div className="h-full w-full flex flex-col justify-start">
        {/* 🔹 Header */}
        <div className="text-center mb-6">
          <img src="./images/mygallery_monalisa.png" alt="Mona Lisa" className="mx-auto" />
          <h2 className="text-4xl font-space-grotesk font-bold mt-4">MY GALLERY</h2>
        </div>

        {/* 🔹 แสดงรูปภาพ */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {gallery.length > 0 ? (
            gallery.map((art) => (
              <div key={art.objectID} className="bg-gray-900 p-4 rounded-lg">
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
                    className="border border-red-500 px-3 py-1 text-sm text-red-500"
                    onClick={() => removeFromGallery(art.objectID)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No stolen artworks yet...</p>
          )}
        </div>

      </div>
    </section>
  );
}
