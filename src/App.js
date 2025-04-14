import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/userPage/HomePage";
import PengumpulanDataPage from "./pages/PengumpulanDataPage";
import PraPemrosesanPage from "./pages/PraPemrosesanPage";
import PemrosesanPage from "./pages/PemrosesanPage";
import ValidasiPage from "./pages/ValidasiPage";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/pengumpulan-data" element={<PengumpulanDataPage/>} />
          <Route path="/admin/pra-pemrosesan" element={<PraPemrosesanPage/>} />
          <Route path="/admin/pemrosesan" element={<PemrosesanPage/>} />
          <Route path="/admin/validasi" element={<ValidasiPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
