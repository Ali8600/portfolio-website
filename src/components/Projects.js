import React from "react";

const projects = [
  {
    title: "UBU Platform – Affiliate Marketing App",
    desc: "Developed a multi-role web platform connecting brands, influencers, and customers with Amazon affiliate integrations. Implemented campaign and document management, email dispatch via Mailgun, and secure file uploads using AWS S3. Designed dynamic React components and built backend APIs using NestJS (Clean Architecture) with PostgreSQL.",
    img: "/UBUDemo.png",
    tags: ["NestJS", "React", "PostgreSQL", "AWS", "Docker"]
  },
  {
    title: "Mind Miner – AI-Based Web Platform",
    desc: "Developed a full-stack AI-powered platform using the MERN stack, integrated OpenAI. Automated document creation with structured prompts, leveraging PDFKit for dynamic PDF generation and OpenAI for content synthesis.",
    img: "/mind-miner.png",
    tags: ["React", "Node.js", "MongoDB", "OpenAI"]
  },
  {
    title: "Chatbot for CS Students",
    desc: "Developed an AI-powered chatbot using OpenAI's GPT model, enabling intelligent conversational interactions. Implemented embeddings and cosine similarity for efficient context-aware responses and decision-making.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["OpenAI", "Python", "Embeddings"]
  }
];

function Projects() {
  return (
    <div id="projects">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-5">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={
                "flex flex-1 flex-col gap-3 rounded-2xl min-w-60 max-w-xs bg-white/10 border border-white/20 shadow-xl backdrop-blur-md transition-transform duration-300 animate-fade-in cursor-pointer group hover:scale-105 hover:shadow-2xl hover:border-fuchsia-400"
              }
              style={{ animationDelay: `${0.1 * idx}s` }}
              onClick={() => {
                if (project.title.includes('UBU Platform')) {
                  window.open('https://ubu.live', '_blank', 'noopener noreferrer');
                }
                else if (project.title.includes('Mind Miner')) {
                  window.open('https://codingcops.com/case-studies/mindminer/', '_blank', 'noopener noreferrer');
                }
              }}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if (e.key === 'Enter' && project.title.includes('UBU Platform')) {
                  window.open('https://ubu.live', '_blank', 'noopener noreferrer');
                }
              }}
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