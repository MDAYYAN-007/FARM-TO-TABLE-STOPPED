import React from "react";
import Image from "next/image";

const buy = () => {
  return (
    <div>
      <div class="container mx-auto my-8">
        <h1 class="text-3xl font-bold text-center mb-8">
          Explore Fresh Produce
        </h1>
        <div class="flex flex-col space-y-6 justify-center items-center">
          {/* <!-- Fruits Section --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
            <div className="relative w-full h-48">
              <Image
                src="/images/fruits.jpg"
                alt="Fruits"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-2">Fresh Fruits</h2>
              <p class="text-gray-700 mb-4">
                Discover a variety of fresh, organic fruits directly from local
                farmers.
              </p>
              <a
                href="/fruits"
                class="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              >
                View Fruits
              </a>
            </div>
          </div>
          {/* <!-- Vegetables Section --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
          <div className="relative w-full h-48">
              <Image
                src="/images/vegetables.jpg"
                alt="Fruits"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-2">Fresh Vegetables</h2>
              <p class="text-gray-700 mb-4">
                Explore a range of fresh, organic vegetables sourced from local
                farms.
              </p>
              <a
                href="/vegetables"
                class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
              >
                View Vegetables
              </a>
            </div>
          </div>
          {/* <!-- Grains Section --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
          <div className="relative w-full h-48">
              <Image
                src="/images/grains.png"
                alt="Fruits"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover"
              />
            </div>
            <div class="p-6">
              <h2 class="text-2xl font-semibold mb-2">Organic Grains, Pulses and Nuts</h2>
              <p class="text-gray-700 mb-4">
                Find a selection of organic grains, pulses and nuts for all your culinary needs.
              </p>
              <a
                href="/grains"
                class="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              >
                View Grains
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default buy;