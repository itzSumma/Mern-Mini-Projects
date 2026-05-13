import { useState } from 'react'; // ১. স্টেট ব্যবহারের জন্য ইমপোর্ট
import { 
  Modal, 
  Dialog, 
  Heading, 
  TextField, 
  Label, 
  Input, 
  FieldError, 
  Select, 
  ListBox, 
  TextArea, 
  Button, 
  Popover, 
  SelectValue, 
  ListBoxItem 
} from 'react-aria-components'; 
import { X, Edit3 } from 'lucide-react';

const EditModal = ({ isOpen, setIsOpen, destination, onUpdate }) => {
  // ২. লোডিং স্টেট ডিক্লেয়ার করা
  const [isUpdating, setIsUpdating] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true); // ৩. আপডেট শুরু হলে লোডিং ট্রু হবে
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      // ৪. প্যারেন্ট ফাংশন (onUpdate) শেষ না হওয়া পর্যন্ত অপেক্ষা করবে
      await onUpdate(data); 
    } catch (error) {
      console.error("Failed to update:", error);
    } finally {
      setIsUpdating(false); // ৫. কাজ শেষ হলে (সফল বা ব্যর্থ) লোডিং বন্ধ হবে
    }
  };

  if (!destination) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={setIsOpen}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <Dialog className="bg-white rounded-[32px] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto outline-none relative">
        
        {/* TOP HEADER */}
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 flex items-center justify-between px-8 py-6 border-b border-gray-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-xl">
              <Edit3 size={22} className="text-blue-600" />
            </div>
            <Heading slot="title" className="text-xl font-bold text-gray-900">
              Edit Destination
            </Heading>
          </div>

          <Button 
            onPress={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors outline-none group"
          >
            <X size={24} className="text-gray-400 group-hover:text-gray-600" />
          </Button>
        </div>

        <div className="p-8 md:p-10 pt-4">
          <form className="space-y-8" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="destinationName" defaultValue={destination?.destinationName} isRequired>
                  <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Destination Name</Label>
                  <Input placeholder="e.g. Bali Paradise" className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all" />
                  <FieldError className="text-red-500 text-xs mt-1" />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="country" defaultValue={destination?.country} isRequired>
                <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Country</Label>
                <Input className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all" />
                <FieldError />
              </TextField>

              {/* Category */}
              <Select name="category" defaultSelectedKey={destination?.category} isRequired className="flex flex-col">
                <Label className="text-sm font-semibold mb-2 ml-1 text-gray-700">Category</Label>
                <Button className="w-full border-2 border-gray-100 p-4 rounded-2xl flex justify-between items-center outline-none focus:border-blue-500 bg-white">
                  <SelectValue />
                  <span aria-hidden="true" className="text-gray-400">▼</span>
                </Button>
                <Popover className="bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[240px] z-[110]">
                  <ListBox className="p-2 outline-none">
                    {["Beach", "Mountain", "City", "Adventure", "Cultural", "Luxury"].map(cat => (
                      <ListBoxItem key={cat} id={cat} className="p-3 rounded-xl cursor-pointer hover:bg-blue-50 text-gray-700 outline-none focus:bg-blue-600 focus:text-white">
                        {cat}
                      </ListBoxItem>
                    ))}
                  </ListBox>
                </Popover>
              </Select>

              {/* Price */}
              <TextField name="price" type="number" defaultValue={destination?.price} isRequired>
                <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Price (USD)</Label>
                <Input className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all" />
              </TextField>

              {/* Duration */}
              <TextField name="duration" defaultValue={destination?.duration} isRequired>
                <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Duration</Label>
                <Input className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all" />
              </TextField>

              {/* Image URL Input */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" defaultValue={destination?.imageUrl || ""} isRequired>
                  <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Image URL</Label>
                  <Input 
                    type="url" 
                    placeholder="https://example.com/image.jpg" 
                    className="w-full border-2 border-gray-100 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all" 
                  />
                  <FieldError className="text-red-500 text-xs mt-1" />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" defaultValue={destination?.description} isRequired>
                  <Label className="block text-sm font-semibold mb-2 ml-1 text-gray-700">Description</Label>
                  <TextArea className="w-full border-2 border-gray-100 p-4 rounded-[24px] min-h-[140px] focus:border-blue-500 outline-none transition-all" />
                </TextField>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-50">
              <Button
                onPress={() => setIsOpen(false)}
                className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition rounded-full py-4 font-bold outline-none"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                // ৬. লোডিং অবস্থায় বাটন ডিসেবল থাকবে
                disabled={isUpdating}
                className={`flex-1 text-white transition rounded-full py-4 font-bold shadow-xl outline-none ${isUpdating ? 'bg-gray-600' : 'bg-black hover:bg-gray-800'}`}
              >
                {/* ৭. কন্ডিশনাল টেক্সট */}
                {isUpdating ? "Saving Changes..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </Modal>
  );
};

export default EditModal;