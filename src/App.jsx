import axios from "axios";
import { useEffect } from "react";
import { SmoothScrollHero } from "./components/Home";
// import Home2 from "./components/Home2";
// import Navbar from "./components/Navbar";  

function App() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://10.60.201.123/greeting");
      console.log(response.data);
    }
    getData();
  }, []);
  return (
    <div>
      <SmoothScrollHero />
      {/* <Navbar /> */}
      {/* <Home2 /> */}
    </div>
  );
}

export default App;
