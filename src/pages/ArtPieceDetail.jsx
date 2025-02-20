import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ArtPieceDetail() {
  const { id } = useParams(); // ดึงค่า ID จาก URL
  const [artpiece, setArtpiece] = useState(null);

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
      .then((res) => res.json())
      .then((data) => setArtpiece(data));
  }, [id]);

  if (!artpiece) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  return (
    <section className="w-full bg-black text-white py-16 flex flex-col items-center">
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
