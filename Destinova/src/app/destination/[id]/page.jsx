"use client";
import { useState, useEffect } from "react";
import EditModal from "@/Componants/EditModal";
import { MapPin, Clock, Edit } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast"; // ১. টোস্ট ইমপোর্ট করুন

const DestinationDetailsPage = ({ params }) => {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { id } = await params;
        const res = await fetch(`http://localhost:5000/destination/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setDestination(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load destination details");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [params]);

  const handleUpdate = async (updatedData) => {
    try {
      const { id } = await params;
      const res = await fetch(`http://localhost:5000/destination/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        // রিফ্রেশ ছাড়া স্টেট আপডেট
        setDestination((prev) => ({ ...prev, ...updatedData }));
        setIsEditModalOpen(false);
        toast.success("Destination updated successfully! 🎉"); // ২. সাকসেস মেসেজ
      } else {
        toast.error("Failed to update destination");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("An error occurred during update");
    }
  };

  if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;
  if (!destination) return <div className="text-center py-20 font-bold">Destination not found!</div>;

  const { destinationName, country, price, description, duration, imageUrl, category } = destination;

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      {/* Top Section */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{destinationName}</h1>
          <div className="flex items-center gap-2 text-gray-600 mt-3 text-lg">
            <MapPin className="text-blue-600" size={20} />
            <span>{country} • <span className="capitalize">{category}</span></span>
          </div>
        </div>

        <button
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all w-fit shadow-md active:scale-95 cursor-pointer"
        >
          <Edit size={18} />
          Edit Details
        </button>
      </div>

      {/* Body Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg bg-gray-100">
            {/* ৩. ইমেজ সোর্স চেক করে রেন্ডার করা */}
            {imageUrl ? (
              <Image src={imageUrl} alt={destinationName} fill className="object-cover" priority />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
            )}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">About this destination</h2>
            <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{description}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xl lg:sticky lg:top-24">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium text-lg">Total Price</span>
              <span className="text-3xl font-extrabold text-emerald-600">${price}</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-2xl">
                <Clock className="text-blue-500" size={20} />
                <span className="font-semibold">{duration} Trip</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        destination={destination}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default DestinationDetailsPage;