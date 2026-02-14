import { lazy, Suspense } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Banner from "../features/home/banner";
import Hero from "../features/home/hero";
const Carousel = lazy(() => import("../features/home/carousel"));
import AboutCard from "../features/home/aboutCard";
import Letterbox from "../features/home/letterBox";
import RevLetterBox from "../features/home/revLetterBox";
import Gmap from "../components/gmap";
import TestimonialsSection from "../components/testimonials";

// THEME TOKENS
// White   #FFFFFF  — dominant bg
// Black   #111111  — text, dark panels, button bg
// Gold    #C8960C  — prevalent accent, borders, headings, button bg
// Red     #9B1C1C  — decorative lines, separators, corner accents only

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:wght@300;400;600;700&display=swap');
        *, *::before, *::after { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        html { scroll-behavior: smooth; }
        p, h1, h2, h3, h4, li { hyphens: none; overflow-wrap: normal; word-break: normal; }
      `}</style>

      <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
        <header className="sticky top-0 z-50 bg-[#111111]">
          <Navbar />
          <Banner />
        </header>

        <main>
          <Hero />
          {/* AboutCard rendered ONCE here — not inside Hero */}
          <AboutCard />
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-32 bg-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-7 h-7 border-2 border-[#C8960C] border-t-transparent rounded-full animate-spin" />
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase text-black/35"
                    style={{ fontFamily: "'Lato',sans-serif" }}
                  >
                    Loading products
                  </p>
                </div>
              </div>
            }
          >
            <Carousel />
          </Suspense>
          <TestimonialsSection />
          <Letterbox />
          <RevLetterBox />
          <Gmap />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
