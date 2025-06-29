import React from "react";

function Hero() {
  return (
    <div>
      <div>
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC8944QnBk9Xq5Dwse-8UYxQUZrhGh5pJuTSdJuWghTqDbG6nM3NAxE9iqgA6iPWpSFQgBHX56DEcORV6QCKWqOvig1JVnc92xOJNtNw8I168ct3Irfrb6n0Brk4xubrRizy4VHmHzcIPNxKs_0ENlEN2rzmPDasP-DEsAZALDbPSecKEIPphn78EbNrNwrAPIxoVjqlY0XNgKyBDjA4GCALDk5g2EgKyJ4l71cSAnI9UuhK0rOe276rhKV11IkBmd6mmm0pg6ExM0\')' }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Hi, I'm Ali Idrees
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal">
              Software Engineer specializing in building high-quality web applications. Passionate about creating innovative solutions and continuously learning new technologies.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3d98f4] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">View Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero; 