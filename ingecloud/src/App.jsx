import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarItem from "./components/Navbar/NavbarItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClerkProvider } from "@clerk/clerk-react";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <div className="App">
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavbarItem />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </ClerkProvider>
    </div>
  );
}

export default App;
