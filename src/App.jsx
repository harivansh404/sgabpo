import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ServicePage from "./components/pages/ServicePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
