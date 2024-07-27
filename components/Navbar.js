import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faInfoCircle, faSignOutAlt, faClipboardList, faBoxOpen, faShoppingCart, faCog, faShoppingBag, faSeedling, faInfo, faShieldAlt, faUser, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-550 py-2 text-white fixed top-0 left-0 w-full z-20 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 ">
      <div className="flex flex-row items-center justify-between px-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-green-700">
            <Link href="/">FarmFresh</Link>
          </h1>
          <p className="mt-2 text-sm text-green-700">Promoting sustainable agriculture and local farming.</p>
        </div>
        <div className="flex space-x-6 text-lg items-center">
          <Link href="/" className="hover:text-green-700 px-2">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <div className="relative group">
            <button className="hover:text-green-700 focus:outline-none px-2">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="dropdown-menu absolute right-0 w-48 p-1 bg-white bg-opacity-90 text-black rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link href="/buy" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2" /> Buy
              </Link>
              <Link href="/sell" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faSeedling} className="mr-2" /> Sell
              </Link>
              <Link href="/info" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faInfo} className="mr-2" /> Info
              </Link>
              <Link href="/crop-safety" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" /> Crop Safety
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-green-700 focus:outline-none px-2">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <div className="dropdown-menu absolute right-0 w-48 p-1 bg-white bg-opacity-90 text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link href="/my-products" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faBoxOpen} className="mr-2" /> My Products
              </Link>
              <Link href="/orders-received" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> Orders
              </Link>
              <Link href="/cart" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-green-700 focus:outline-none px-2">
              <FontAwesomeIcon icon={faCog} />
            </button>
            <div className="dropdown-menu absolute right-0 w-48 p-1 bg-white bg-opacity-90 text-black rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg">
              <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" /> Dashboard
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
              </Link>
              <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-green-550 hover:shadow-xl hover:text-white rounded-md">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
