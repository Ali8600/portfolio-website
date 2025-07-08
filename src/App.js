import React from "react";
import { Header, Hero, Projects, Skills, Contact, Footer } from "./components";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* <Hero /> */}
            {/* <Projects /> */}
            <div id="about"><Hero /></div>
            <div id="projects"><Projects /></div>
            <div id="skills"><Skills /></div>
            <div id="contact"><Contact /></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
