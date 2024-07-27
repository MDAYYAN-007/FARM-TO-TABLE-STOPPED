"use client"
import React, { useState } from "react";
import states from "@/statesndist";

const Buy = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productType: '',
    price: '',
    description: '',
    state: '',
    district: '',
    address: ''
  });

  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
  
    const state = states.find(s => s.name === stateName);
    setDistricts(state ? state.districts : []);
  
    setFormData({
      ...formData,
      state: stateName,
      district: '' 
    });
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sell Your Products</h2>
        <p className="text-gray-700 mb-6 text-center">Fill out the form below to list your products for sale on our platform.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter the product name"
              required
              value={formData.productName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="productType" className="block text-sm font-medium text-gray-700">Product Type</label>
            <select
              id="productType"
              name="productType"
              required
              value={formData.productType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            >
              <option value="" disabled>Select product type</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="grains">Grains</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter the price"
              step="0.01"
              required
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter a brief description of the product"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <select id="state" name="state" value={selectedState} onChange={handleStateChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm">
              <option value="" disabled>Select state</option>
              {states.map((state, index) => (
                <option key={index} value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
            <select id="district" name="district" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 sm:text-sm">
              <option value="" disabled>Select district</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Product Description</label>
            <textarea
              id="address"
              name="address"
              rows="4"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-550 focus:border-green-550 "
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              className="bg-green-550 text-white font-bold py-2 px-4 rounded hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Buy;
