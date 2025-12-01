import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";

export default function App() {
  return (
    // Wrap entire application in a browser router
    <BrowserRouter>
      <div>
        {/* Inside of routes you define each route (page that you want to route to) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
