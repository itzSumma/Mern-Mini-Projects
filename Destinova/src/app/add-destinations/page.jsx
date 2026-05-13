"use client";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import Link from "next/link";
import React from "react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    // Data send to MongoDB
    const res = await fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    if(res.satus===201){
      const data =await res.json();
      alert("Destination added successfully" + data.insertedId);
      e.target
    }

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mt-5 text-center">
        Add Your Destination
      </h1>

      <form className="p-5 md:p-10 space-y-8" onSubmit={onSubmit}>
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label>Destination Name</Label>
              <Input placeholder="Bali Paradise" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label>Country</Label>
            <Input placeholder="Indonesia" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Category */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category">
              <Label>Category</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Beach" textValue="Beach">
                    Beach
                  </ListBox.Item>

                  <ListBox.Item id="Mountain" textValue="Mountain">
                    Mountain
                  </ListBox.Item>

                  <ListBox.Item id="City" textValue="City">
                    City
                  </ListBox.Item>

                  <ListBox.Item id="Adventure" textValue="Adventure">
                    Adventure
                  </ListBox.Item>

                  <ListBox.Item id="Cultural" textValue="Cultural">
                    Cultural
                  </ListBox.Item>

                  <ListBox.Item id="Luxury" textValue="Luxury">
                    Luxury
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>
            <Input type="number" placeholder="1299" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label>Duration</Label>
            <Input placeholder="7 Days / 6 Nights" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
              <Label>Departure Date</Label>
              <Input type="date" className="rounded-2xl w-full" />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl min-h-[120px]"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-white hover:text-black border border-black transition rounded-full py-3">
            Add Travel Package
          </Button>

          <Link href="/" className="w-full">
            <Button
              type="button"
              className="w-full bg-white text-black border border-black hover:bg-black hover:text-white transition rounded-full py-3">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddDestinationPage;
