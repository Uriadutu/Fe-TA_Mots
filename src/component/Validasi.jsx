import React from "react";

const Validasi = () => {
  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Bagian Form */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-800">Jumlah Dataset</label>
          <input
            type="text"
            className="py-2 px-3 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100 transition duration-300"
          />
        </div>
      </div>

      {/* Confusion Matriks */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-100 text-center text-lg font-semibold text-gray-700 border border-gray-200 rounded-t py-3">
          Confusion Matriks
        </div>
        <div className="bg-gray-100 h-52 text-gray-700 border border-gray-200 shadow rounded-b px-4 py-2 mb-6">
          {/* Tambahkan isi confusion matrix di sini */}
        </div>
      </div>

      {/* Akurasi, Presisi, Recall */}
      <div className="max-w-md mx-auto bg-white p-4 rounded-md border border-gray-200 shadow text-gray-800 space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Akurasi:</span>
          <span>-</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Presisi:</span>
          <span>-</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Recall:</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default Validasi;
