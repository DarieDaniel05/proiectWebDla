import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/home";
import Counter from "./components/counter";
import Calculator from "./components/calculator";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
