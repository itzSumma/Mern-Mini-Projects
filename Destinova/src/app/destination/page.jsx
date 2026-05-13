import DestinationCard from "@/Componants/DestinationCard";

const DestinationPage = async () => {
  // Server-side data fetching
  const res = await fetch("http://localhost:5000/destination");
  const data = await res.json();

  return (
    <div className="py-10 px-4"> 
      {/* Title with responsive font sizes */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Discover Your Next Adventure
      </h1>

      {/* Grid: 1 col on Mobile, 2 on Tablet, 3 on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((destination) => (
          <DestinationCard 
            key={destination._id} 
            destination={destination} 
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;