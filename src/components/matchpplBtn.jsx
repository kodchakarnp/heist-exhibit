import { useState } from "react";
import { MatchPeople } from "./matchPeople"; // นำเข้าฟังก์ชันจับคู่

export default function MatchButton() {
  const [matches, setMatches] = useState([]);

  const handleMatch = () => {
    const result = MatchPeople();
    setMatches(result);
    console.log("Matching Result:", result); // แสดงใน Console
  };

  return (
    <div className="flex flex-col items-center p-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleMatch}
      >
        Start Matching
      </button>

      {/* 🔹 แสดงผลลัพธ์การจับคู่ */}
      <div className="max-w-2xl">
        {matches.length > 0 && (
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Matching Results</h2>
            {matches.slice(0, 10).map((person, index) => (
              <div key={index} className="mb-3 p-2 border-b border-gray-600">
                <p className="font-semibold">{person.name} ({person.gender})</p>
                <p>Best Match: {person.matches[0]?.name || "No Match"} ({person.matches[0]?.compatibility}%)</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

  
  
  
  // import { MatchPeople } from "./matchPeople";

    // export default function MatchpplBtn() {
    // return (
    //     <div>
    //         <button className="bg-blue-500 text-white px-4 rounded" onClick={MatchPeople}> Start Match </button>
    //         </div>
    // )
    // }