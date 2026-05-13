import Image from "next/image";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
    category, // Spelling fixed from 'categoty'
    price,
    description,
    duration,
    imageUrl,
  } = destination;

  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container: This ensures all images occupy the same space */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image 
          src={imageUrl} 
          alt={destinationName}
          fill // It will fill the 'aspect-ratio' box
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold truncate">{destinationName}</h2>
        <p className="text-gray-500 text-sm">{country}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-semibold text-blue-600">${price}</span>
          <span className="text-sm text-gray-400">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;