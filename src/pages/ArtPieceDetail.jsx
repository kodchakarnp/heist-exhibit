import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtPieceDetail() {
  const { id } = useParams(); // ดึงค่า ID จาก URL ใน Routes path จาก ExploreArt.jsx
  const [artpiece, setArtpiece] = useState(null);

  //🔸 ทำงานเมื่อ component โหลดครั้งแรก หรือเมื่อ id เปลี่ยน
  //🔸 ดึงข้อมูลภาพศิลปะจาก API โดยใช้ id ที่ได้มา
  //🔸 เมื่อดึงข้อมูลเสร็จสิ้น กำหนดค่าให้กับ artpiece
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
      .then((res) => res.json())
      .then((data) => setArtpiece(data));
  }, [id]);

  // 🔸 ถ้าไม่มีข้อมูล แสดงข้อความ Loading...  
  if (!artpiece) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <section className="h-full w-full flex items-center justify-center flex-col bg-black">
      <img src={artpiece.primaryImage || "/placeholder.jpg"} alt={artpiece.title} className="w-[50%] max-w-xl" />
      
      <h2 className="text-3xl font-bold mt-6">{artpiece.title || "Unknown Title"}</h2>

      <div className="mt-4 text-gray-400 text-sm text-left max-w-xl">
        <p><strong>Maker:</strong> {artpiece.artistDisplayName || "Unknown"}</p>
        <p><strong>Year:</strong> {artpiece.objectDate || "Unknown"}</p>
        <p><strong>Technique:</strong> {artpiece.medium || "Not specified"}</p>
        <p className="mt-2"><strong>Description:</strong> {artpiece.creditLine || "No description available."}</p>
      </div>
    </section>
  );
}
