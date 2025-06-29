import React from "react";

function Skills() {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* Skill Cards */}
        <div className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] p-4 flex-col">
          <span className="text-white" data-icon="Code" data-size="24px" data-weight="regular">
            {/* Code SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Frontend Development</h2>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">React, Angular, Vue.js</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] p-4 flex-col">
          <span className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
            {/* Database SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Backend Development</h2>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">Node.js, Python, Java</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] p-4 flex-col">
          <span className="text-white" data-icon="Cloud" data-size="24px" data-weight="regular">
            {/* Cloud SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"></path>
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Database Management</h2>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">SQL, NoSQL</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] p-4 flex-col">
          <span className="text-white" data-icon="Database" data-size="24px" data-weight="regular">
            {/* Database SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Cloud Computing</h2>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">AWS, Azure, GCP</p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#314d68] bg-[#182634] p-4 flex-col">
          <span className="text-white" data-icon="GitCommit" data-size="24px" data-weight="regular">
            {/* GitCommit SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
            </svg>
          </span>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Version Control</h2>
            <p className="text-[#90adcb] text-sm font-normal leading-normal">Git, Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills; 