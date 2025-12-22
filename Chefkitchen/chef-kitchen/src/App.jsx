import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TodaySpecial from "./Components/TodaySpecial";
import OurSpecial from "./Components/OurSpecial";
import SouthIndian from "./Components/SouthIndian";
import MenuLayout from "./Layouts/MenuLayout";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Menu Layout */}
      <Route path="/menu" element={<MenuLayout />}>
        <Route index element={<TodaySpecial />} />
        <Route path="today" element={<TodaySpecial />} />
        <Route path="special" element={<OurSpecial />} />
        <Route path="south" element={<SouthIndian />} />
      </Route>

    </Routes>
  );
}

export default App;
