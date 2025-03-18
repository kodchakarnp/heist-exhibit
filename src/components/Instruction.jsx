export default function Instruction() {
    return (
      <section className="w-full bg-black text-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-space-grotesk font-semibold">How to steal the artpiece</h2>
        </div>
  
        {/* 🔹 กริดรูปภาพ + คำอธิบาย */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          
          {/* 🔸 Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-60 h-60 bg-cover bg-center rounded-full" 
                 style={{ backgroundImage: "url('/images/instruction_01.png')" }}>
            </div>
            <p className="mt-4 max-w-sm text-gray-300">
              Every hour on the dot (e.g., 1:00 PM, 8:00 AM), the guards take a bathroom break for 
              <span className="text-green-400 font-bold"> 60 seconds.</span>
            </p>
          </div>
  
          {/* 🔸 Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-60 h-60 bg-cover bg-center rounded-full" 
                 style={{ backgroundImage: "url('/images/instruction_02.png')" }}>
            </div>
            <p className="mt-4 max-w-sm text-gray-300">
              During the break time, You can "steal" artworks to add to your personal gallery by clicking the 
              <span className="text-green-400 font-bold"> "Steal"</span> button.
            </p>
          </div>
  
          {/* 🔸 Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-60 h-60 bg-cover bg-center rounded-full" 
                 style={{ backgroundImage: "url('/images/instruction_03.png')" }}>
            </div>
            <p className="mt-4 max-w-sm text-gray-300">
              If you steal artwork outside the Break Time (e.g., 1:01 PM or 7:59 AM), the system will catch you! 
              All the artwork in your gallery will be lost forever.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  