import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact</h2>
      <div className="max-w-md mx-4 my-6 p-6 rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur-md animate-fade-in flex flex-col gap-6 items-start">
        <div className="flex items-center gap-4">
          {/* Email Icon */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.75-1.25A1.25 1.25 0 0 0 3.5 6.75v.38l8.5 5.67 8.5-5.67v-.38A1.25 1.25 0 0 0 19.25 5H4.75Zm15.75 3.12-7.7 5.14a1 1 0 0 1-1.1 0L3.5 8.12v9.13A1.25 1.25 0 0 0 4.75 18.5h14.5a1.25 1.25 0 0 0 1.25-1.25V8.12Z"/></svg>
          </span>
          <div>
            <p className="text-[#b8d0e8] text-xs font-semibold uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:aliidrees8600@gmail.com" className="text-white text-lg font-medium hover:text-fuchsia-400 transition-colors duration-200">aliidrees8600@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Phone Icon */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.472 14.382a1.5 1.5 0 0 1 1.5 0l2.13 1.23a1.5 1.5 0 0 1 .7 1.8c-.6 1.8-2.13 3.6-4.2 3.6-4.5 0-9.6-5.1-9.6-9.6 0-2.07 1.8-3.6 3.6-4.2a1.5 1.5 0 0 1 1.8.7l1.23 2.13a1.5 1.5 0 0 1 0 1.5l-1.02 1.77a.75.75 0 0 0 .18.96l2.1 2.1a.75.75 0 0 0 .96.18l1.77-1.02Z"/></svg>
          </span>
          <div>
            <p className="text-[#b8d0e8] text-xs font-semibold uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+4915510488658" className="text-white text-lg font-medium hover:text-fuchsia-400 transition-colors duration-200">+49 15510 488658</a>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeInContact 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInContact {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}

export default Contact; 