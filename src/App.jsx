import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import ResumeViewer from "./components/ResumeViewer";
import ProjectsPage from "./components/ProjectsPage";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        if (attempts < 30) {
          attempts += 1;
          requestAnimationFrame(tryScroll);
          return;
        }
        window.scrollTo(0, 0);
      };

      tryScroll();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const MainApp = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
      <Footer/>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/resume" element={<ResumeViewer />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
