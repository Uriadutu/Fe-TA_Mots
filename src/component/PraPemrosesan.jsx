import React from "react";

const PraPemrosesan = () => {
  return (
    <div className="p-4 bg-white min-h-screen">


      <div className="overflow-x-auto shadow rounded mb-6">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th colSpan="4" className="text-center px-4 py-3 text-lg border-b border-gray-200">
                DataSet
              </th>
            </tr>
            <tr className="text-sm">
              <th className="text-left px-4 py-2 border-b border-gray-200">Kode</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Nama File</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Label Manual</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Gambar</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            <tr className="hover:bg-gray-50 transition duration-200">
              <td className="px-4 py-2 border-b border-gray-200">001</td>
              <td className="px-4 py-2 border-b border-gray-200">biji_pala_1.jpg</td>
              <td className="px-4 py-2 border-b border-gray-200">Baik</td>
              <td className="px-4 py-2 border-b border-gray-200">
                <img
                  src="https://via.placeholder.com/80"
                  alt="biji_pala"
                  className="w-20 h-14 object-cover rounded"
                />
              </td>
            </tr>
            {/* Tambahkan baris lainnya di sini */}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 text-sm text-gray-700">
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          &lt;&lt;
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded bg-gray-200 font-semibold">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default PraPemrosesan;
