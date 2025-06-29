import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="flex min-h-[480px] flex-col items-start justify-end px-4 pb-10">
        {/* Curved, shadowed background image */}
        <div
          className="absolute inset-0 z-0 rounded-3xl shadow-2xl overflow-hidden m-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16,26,35,0.5) 0%, rgba(16,26,35,0.7) 100%), url(/portfolio-cover.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.95)'
          }}
        ></div>
        {/* Glass card overlay */}
        <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 max-w-xs mb-8 animate-fade-in shadow-xl mt-10 ml-6">
          <h1 className="text-xl md:text-2xl font-black leading-tight tracking-[-0.033em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-pink-500 mb-1">
            Hi, I'm Ali Idrees
          </h1>
          <h2 className="text-white/90 text-xs md:text-sm font-normal leading-normal mb-3">
            Software Engineer specializing in building high-quality web applications. Passionate about creating innovative solutions and continuously learning new technologies.
          </h2>
          <button className="transition-all duration-300 bg-gradient-to-r from-blue-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold py-2 px-5 rounded-full shadow-lg hover:scale-105 focus:outline-none text-xs">
            <span className="truncate">View Projects</span>
          </button>
        </div>
      </div>
      {/* Curved SVG at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none pointer-events-none" style={{ height: '60px' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 C480,80 960,-20 1440,60 L1440,60 L0,60 Z" fill="#101a23" />
        </svg>
      </div>
      {/* Fade-in animation keyframes */}
      <style>{`
        .animate-fade-in {
          animation: fadeInHero 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s both;
        }
        @keyframes fadeInHero {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default Hero; 