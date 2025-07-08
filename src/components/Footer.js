import React from "react";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-4 px-4 py-8 bg-white/10 border-t border-white/20 shadow-inner backdrop-blur-md rounded-t-2xl mt-10 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-4 mb-2">
        <a href="https://github.com/ali8600" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white/10 hover:bg-fuchsia-500/20 transition-all duration-200 text-white shadow-md">
          <span className="sr-only">GitHub</span>
          {/* Github SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
          </svg>
        </a>
        <a href="https://linkedin.com/in/ali-idrees-6b5767193/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 bg-white/10 hover:bg-fuchsia-500/20 transition-all duration-200 text-white shadow-md">
          <span className="sr-only">LinkedIn</span>
          {/* Linkedin SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg>
        </a>
      </div>
      <div className="w-full border-t border-white/10 my-2"></div>
      <p className="text-[#b8d0e8] text-base font-normal leading-normal">© 2024 Ali Idrees. All rights reserved.</p>
      <style>{`
        .animate-fade-in {
          animation: fadeInFooter 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInFooter {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </footer>
  );
}

export default Footer; 