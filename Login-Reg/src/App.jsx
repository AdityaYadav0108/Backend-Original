import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { UserContextProvider } from "../context/userContext";
import { Toaster } from "react-hot-toast";
import Dahsboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dahsboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
