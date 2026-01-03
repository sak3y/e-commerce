import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gmap from "../components/gmap";
import Banner from "../components/announcement";
import Hero from "../components/hero";
import CategoriesSection from "../components/productList";
import AboutCard from "../components/aboutCard";
import LetterboxIntro from "../components/letterBox";

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
        <CategoriesSection />
        <LetterboxIntro />
      </main>

      <Gmap />
      <Footer />
    </div>
  );
};

export default Home;
