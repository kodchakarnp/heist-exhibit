export default function HeroBanner() {
    return (
      <section className="relative w-full h-screen bg-black">
        {/* ภาพพื้นหลัง */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/monalisa_banner.jpg')" }} // เปลี่ยน URL เป็นรูปของคุณ
        >
          {/* Overlay ไล่สีดำเพื่อให้อ่านง่ายขึ้น */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
  
        {/* เนื้อหา */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mt-120">
            THE HEIST EXHIBITIONNNNNNNNNN
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Explore art treasures from classical to contemporary, then become an art thief while the guard sneaks off to the bathroom for 60 seconds. Which masterpieces will you snatch?
          </p>
        </div>
      </section>
    );
  }
  