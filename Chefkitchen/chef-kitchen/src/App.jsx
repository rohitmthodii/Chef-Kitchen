import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MenuLayout from "./Layouts/MenuLayout";
import TodaySpecial from "./Components/TodaySpecial";
import OurSpecial from "./Components/OurSpecial";
import SouthIndian from "./Components/SouthIndian";
import Favourates from "./Components/Favourates";
import Mail from "./Components/Mail";
import Bell from "./Components/Bell";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/menu" element={<MenuLayout />}>
        <Route index element={<TodaySpecial />} />
        <Route path="today" element={<TodaySpecial />} />
        <Route path="our" element={<OurSpecial />} />
        <Route path="south" element={<SouthIndian />} />
      </Route>

      <Route path="/favourate" element={<Favourates />}/>
      <Route path="/mail" element={<Mail />}/>
      <Route path="/bell" element={<Bell />}/>

    </Routes>
  );
}

export default App;
