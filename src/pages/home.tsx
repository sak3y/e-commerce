import { lazy, Suspense } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Banner from "../components/banner";
import Hero from "../components/hero";
const Carousel = lazy(() => import("../components/carousel"));
import AboutCard from "../components/aboutCard";
import Letterbox from "../components/letterBox";
import RevLetterBox from "../components/revLetterBox";
import Gmap from "../components/gmap";
import TestimonialsSection from "../components/testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] text-[#1B1B1B]">
      <header>
        <Banner />
        <Navbar />
      </header>

      <main>
        <Hero />
            <AboutCard />
        <Suspense fallback={<div>Producst are loading...</div>}>
          <Carousel />
        </Suspense>
        <TestimonialsSection />
        <Letterbox />
    
        <RevLetterBox />

        <Gmap />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
