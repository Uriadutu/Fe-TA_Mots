import React from "react";

const Pemrosesan = () => {
  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Bagian Form */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">Jumlah Dataset</label>
          <input
            type="text"
            className="py-2 px-3 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100 transition duration-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">Rasio DL : DU</label>
          <select className="py-2 px-3 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100 transition duration-300">
            <option value="Pilih">Pilih</option>
            <option value="1">Pilih 1</option>
            <option value="2">Pilih 2</option>
            <option value="3">Pilih 3</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">Data Test</label>
          <input
            type="text"
            className="py-2 px-3 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100 transition duration-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">Data Uji</label>
          <input
            type="text"
            className="py-2 px-3 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100 transition duration-300"
          />
        </div>
      </div>

      {/* Tombol Proses */}
      <div className="flex justify-center mb-6">
        <button className="px-6 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition duration-300">
          Proses
        </button>
      </div>

      {/* Langkah-langkah Penerapan */}
      <div className="overflow-x-auto bg-gray-100 flex text-lg justify-center text-center border border-gray-200 text-gray-700 rounded-t py-3 font-semibold">
        Langkah-langkah Penerapan CNN (Perhitungan)
      </div>
      <div className="overflow-x-auto bg-gray-100 h-28 text-gray-700 border border-gray-200 shadow rounded-b mb-6 px-4 py-2">
        {/* Isi perhitungan nanti di sini */}
      </div>
    </div>
  );
};

export default Pemrosesan;
