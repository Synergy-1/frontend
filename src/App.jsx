import axios from "axios";
import { useEffect } from "react";
import { SmoothScrollHero } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://10.60.201.123/greeting");
      console.log(response.data);
    }
    getData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SmoothScrollHero />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
