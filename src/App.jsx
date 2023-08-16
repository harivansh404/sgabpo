import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import ServicePage from "./components/pages/ServicePage";

import "./App.css";
import ContactForm from "./components/Contact/ContactForm.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<Navigate to='/' />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicePage />} />
                <Route path='/contact' element={<ContactForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
