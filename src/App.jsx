import axios from "axios";
import { useEffect } from "react";
import { SmoothScrollHero } from "./components/Home";

function App() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://10.60.201.123/greeting");
      console.log(response.data);
    }
    getData();
  }, []);
  return (
    <div className="bg-red-500">
      <SmoothScrollHero />
    </div>
  );
}

export default App;
