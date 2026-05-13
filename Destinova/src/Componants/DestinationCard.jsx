import { Calendar, MapPin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
  const {
    destinationName,
    country,
   _id, 
    price,
    
    duration,
    imageUrl,
  } = destination;

  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
     
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image 
          src={imageUrl} 
          alt={destinationName}
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold truncate">{destinationName}</h2>
       <div className="flex items-center gap-1 text-gray-500 mt-1">
          <MapPin size={16} className="text-blue-500" /> 
          <p className="text-sm">{country}</p>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="font-semibold text-blue-600 text-xl">${price}</span>
          <div className="flex items-center gap-1 ">
            <Calendar size={14} />
            <span className="text-sm font-medium text-gray-400">{duration}</span>
          </div>
        </div>

       <Link href={`/destination/${_id}`}> <button className="mt-5 w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors group">
          Book Now
          <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;