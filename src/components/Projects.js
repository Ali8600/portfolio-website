import React from "react";

function Projects() {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {/* Project Cards */}
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDPpHSlx0IFuirvz48pdPps2pBstQiL8uAloBZ_xkr5NFjNhXiYBeP2Txw8vECsxAODE8P2KJfQoxb4dm8a9yb8PLqiH0_4-TrcRNfvNbb_Uh854H2YK0HFuDVjVOcW2hJ6hUGeF1t3Ez0f895fQroqueHjUeFzvYq8V9vOocD2Aisp3GUt17KEuIGLdMm3pHMPf1SphWe5uXFyS-deBvlQhu6avN366JCva29tkr_rkCZaM3nKE-Y2EG1HMOlswGawqOudhcNPtZI)' }} />
            <div>
              <p className="text-white text-base font-medium leading-normal">Project Alpha</p>
              <p className="text-[#90adcb] text-sm font-normal leading-normal">A web application for managing tasks and projects efficiently.</p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCerS8cCGxVFZ57ggSFwP0irrKxjiY3E51f5SOAA7tzEAmY6vpcydzK4gVlqAxCGBv99TtgNYCXOpcdTvwSFJC12P0rfcCUZWf_955joJy4dSc5LPHPO8jPuPWodAUtvkdzxC7z-_e5vCPrQMaYTWY2rawOATpmFRBTFrWdZ6mMowk2Iy4TBdJkN3E9Efjo2tOt78j5fSj7_nYiY6wMS5sVlO2R9bh_1qcNV-mLWd5iJUaQiF704DKdQVqGBQrHsz3c88vb68Quizc)' }} />
            <div>
              <p className="text-white text-base font-medium leading-normal">E-commerce Platform</p>
              <p className="text-[#90adcb] text-sm font-normal leading-normal">An online store with a user-friendly interface and secure payment gateway.</p>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAxgpUfRBQaV2No8aLwEv8dE3wY9wQEyhl3-GLoIgo3FiyTrVFiDr6zVHSlk3coXqFgKqwKHoasgLZrgvm4dcTkJq6xoKbnRytT3B7xKBUyXwar6Is7XO67p6ZSFYOrHgmifDsZspuBuzeJ3eIesEcZ82ZNUm5FgDwLEbPmcREoITiErcIWABbpFgkVNlF6gvzjR9xC_d-Iz1uEM4-nG8PPDkZ7QgTY_01o-hXwJTKHwB-3fUcQ6QDrPniE4jnkklUkPkwC5dDvRQ0)' }} />
            <div>
              <p className="text-white text-base font-medium leading-normal">Data Analytics Dashboard</p>
              <p className="text-[#90adcb] text-sm font-normal leading-normal">A dashboard for visualizing and analyzing large datasets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 