import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div
      id="top-banner"
      className=" top-0 left-0 right-0 z-50 w-full bg-[#b69860] text-center py-3 text-[11px] md:text-sm tracking-[0.11em] font-['Baloo_2',cursive] border-b border-black/5"
    >
      <Link to="/products" className="text-white font-normal">
        handmade cakes & pastries · Limited batches ❤️
      </Link>
    </div>
  );
};

export default Banner;
