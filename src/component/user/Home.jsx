import React, { useState } from "react";

const Home = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [detectionResult, setDetectionResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setDetectionResult(null); // reset hasil deteksi
    }
  };

  const handleDetect = () => {
    // Simulasikan hasil deteksi
    setDetectionResult("Hasil");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Pendeteksi Bendera Negara ASEAN
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Unggah Gambar Bendera Untuk Mengetahui Negara
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <label className="px-6 py-2 bg-white border border-gray-300 text-sm rounded-md hover:bg-gray-100 transition cursor-pointer">
            Unggah Gambar Bendera
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {previewUrl && (
            <button
              onClick={handleDetect}
              className="px-6 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition"
            >
              Deteksi
            </button>
          )}
        </div>

        {previewUrl && (
          <div className="mt-6 flex justify-center">
            <div className="w-[32rem]">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full object-cover rounded shadow"
              />
            </div>
          </div>
        )}

        {detectionResult && (
          <div className="mt-6 text-gray-700  px-4 py-2 bg-gray-100  font-semibold text-lg">
            {detectionResult}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
