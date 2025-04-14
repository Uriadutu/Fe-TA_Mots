import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white w-full z-10 fixed px-3">
      <div className="flex justify-center items-center px-5 py-5">
       
        <div className="flex space-x-6">
          <Link
            to="/admin/pengumpulan-data"
            className="text-gray-800 text-md"
          >
            Pengumpulan Data
          </Link>
          <Link
            to="/admin/pra-pemrosesan"
            className="text-gray-800 text-md"
          >
            Pra-pemrosesan
          </Link>
          <Link
            to="/admin/pemrosesan"
            className="text-gray-800 text-md"
          >
            Pemrosesan
          </Link>
          <Link
            to="/admin/validasi"
            className="text-gray-800 text-md"
          >
            Validasi
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-md"></div>
    </div>
  );
};

export default Navbar;
