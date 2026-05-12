import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div
      className="
      bg-[url('/assets/Banner1.jpg')] 
      bg-cover 
      bg-center 
      text-white  
      flex 
      flex-col 
      items-center  
      justify-between 
      gap-5 
      h-[600px] 
      md:h-[700px] 
      overflow-hidden
      "
    >
      {/* TOP SECTION */}
      <div className="p-10 text-center flex flex-col items-center gap-4 flex-1 justify-center">

        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl text-white/90">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-black text-white px-5 py-3 cursor-pointer hover:bg-white hover:text-black transition">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/40 hover:bg-white hover:text-black transition cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      {/* BOTTOM SEARCH BAR */}
      <div className="bg-black/30 backdrop-blur-md flex justify-between gap-5 w-full items-center px-4 py-4">

        <div className="px-3">
          <h3 className="text-sm font-medium">Location</h3>
          <p className="text-xs text-white/80">Address, City or Zip</p>
        </div>

        <Separator orientation="vertical" className="h-8 opacity-40" />

        <div>
          <h3 className="text-sm font-medium">Date/Duration</h3>
          <p className="text-xs text-white/80">Anytime / 3 Days</p>
        </div>

        <Separator orientation="vertical" className="h-8 opacity-40" />

        <div>
          <h3 className="text-sm font-medium">Budget</h3>
          <p className="text-xs text-white/80">$0 - $3000</p>
        </div>

        <Separator orientation="vertical" className="h-8 opacity-40" />

        <div>
          <h3 className="text-sm font-medium">People</h3>
          <p className="text-xs text-white/80">5 - 10</p>
        </div>

        <button className="bg-black px-5 py-2 hover:bg-white hover:text-black transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;