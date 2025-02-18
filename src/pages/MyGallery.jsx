import { useState, useEffect } from "react";
import Footer from "../components/Footer";

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
    <section className="w-full bg-black text-white py-16">
      {/* 🔹 Header */}
      <div className="text-center mb-6">
        <img src="./images/mygallery_monalisa.png" alt="Mona Lisa" className="mx-auto h-32" />
        <h2 className="text-4xl font-bold mt-4">MY GALLERY</h2>
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
                <button className="border border-white px-3 py-1 text-sm">
                  👁 View
                </button>
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

      {/* 🔹 ปุ่ม Show More (ยังไม่ทำงานจริง แต่สามารถเพิ่มฟังก์ชันได้ภายหลัง) */}
      <div className="text-center mt-8">
        <button className="border border-white px-6 py-2 text-sm">
          Show more
        </button>
      </div>
      {/* <Footer/> */}
    </section>
  );
}
