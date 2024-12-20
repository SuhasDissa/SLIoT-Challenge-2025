import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Loader from "./components/Loader";
import "locomotive-scroll/dist/locomotive-scroll.css";

const App = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
  
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
  
      // Clean up on component unmount
      return () => {
        if (scroll) scroll.destroy();
      };
    })();
  }, []);
  return (
    <>
      <div data-scroll-container className="flex flex-col min-h-screen bg-transparent pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Loader />
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default App;
