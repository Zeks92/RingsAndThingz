"use client";

import { useEffect } from 'react';
import { list } from '@/api/api';
import Image from 'next/image';
import whiteBackground from '@/assets/logo/White background.jpg';
import Slider from './components/slider';

export default function HomePage() {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  useEffect(() => {
    const listRecommended = async () => {
      try {
        const response = await list("/products/section/list/recommendation");
        console.log("Response", response.payload);
      } catch (error) {
        console.error("Error", error);
      }
    };

    listRecommended();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
    <Image
      src={whiteBackground}
      alt="Welcome to RINGS AND thingz"
      className="w-auto h-auto max-w-full"
      priority
    />

    <div className="flex w-full mt-10">
      <div className="w-1/4 pl-4 flex flex-col space-y-4 text-gray-800">
        <h3 className="text-xl font-bold font-heading">
          NEW IN
        </h3>
        <p className="text-base font-body">
          Explore New Collection
        </p>
        <button
            onClick={handleButtonClick}
            className="px-4 py-2 text-gray-800 font-semibold border border-gray-400 rounded-md bg-white hover:bg-gray-100 transition duration-200"
          >
            See All Products
          </button>
      </div>

      <div className="w-3/4 p-4">
      <Slider />
      </div>
    </div>
  </div>
);
}
