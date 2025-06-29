import React from "react";

const projects = [
  {
    title: "Project Alpha",
    desc: "A web application for managing tasks and projects efficiently.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPpHSlx0IFuirvz48pdPps2pBstQiL8uAloBZ_xkr5NFjNhXiYBeP2Txw8vECsxAODE8P2KJfQoxb4dm8a9yb8PLqiH0_4-TrcRNfvNbb_Uh854H2YK0HFuDVjVOcW2hJ6hUGeF1t3Ez0f895fQroqueHjUeFzvYq8V9vOocD2Aisp3GUt17KEuIGLdMm3pHMPf1SphWe5uXFyS-deBvlQhu6avN366JCva29tkr_rkCZaM3nKE-Y2EG1HMOlswGawqOudhcNPtZI",
    tags: ["React", "Node.js"]
  },
  {
    title: "E-commerce Platform",
    desc: "An online store with a user-friendly interface and secure payment gateway.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCerS8cCGxVFZ57ggSFwP0irrKxjiY3E51f5SOAA7tzEAmY6vpcydzK4gVlqAxCGBv99TtgNYCXOpcdTvwSFJC12P0rfcCUZWf_955joJy4dSc5LPHPO8jPuPWodAUtvkdzxC7z-_e5vCPrQMaYTWY2rawOATpmFRBTFrWdZ6mMowk2Iy4TBdJkN3E9Efjo2tOt78j5fSj7_nYiY6wMS5sVlO2R9bh_1qcNV-mLWd5iJUaQiF704DKdQVqGBQrHsz3c88vb68Quizc",
    tags: ["Vue.js", "Stripe"]
  },
  {
    title: "Data Analytics Dashboard",
    desc: "A dashboard for visualizing and analyzing large datasets.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxgpUfRBQaV2No8aLwEv8dE3wY9wQEyhl3-GLoIgo3FiyTrVFiDr6zVHSlk3coXqFgKqwKHoasgLZrgvm4dcTkJq6xoKbnRytT3B7xKBUyXwar6Is7XO67p6ZSFYOrHgmifDsZspuBuzeJ3eIesEcZ82ZNUm5FgDwLEbPmcREoITiErcIWABbpFgkVNlF6gvzjR9xC_d-Iz1uEM4-nG8PPDkZ7QgTY_01o-hXwJTKHwB-3fUcQ6QDrPniE4jnkklUkPkwC5dDvRQ0",
    tags: ["Python", "D3.js"]
  }
];

function Projects() {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="flex flex-1 flex-col gap-3 rounded-2xl min-w-60 max-w-xs bg-white/10 border border-white/20 shadow-xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-2xl border-b border-white/10"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="p-4 flex flex-col gap-2">
                <p className="text-white text-base font-bold leading-normal mb-1">{project.title}</p>
                <p className="text-[#b8d0e8] text-sm font-normal leading-normal mb-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white/90 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeInProject 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInProject {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default Projects; 