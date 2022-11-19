import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import HomeNav from "./Components/Navbar/HomeNav/HomeNav";
import Navbar from "./Components/Navbar/Navbar";
import Section21 from "./Components/Section/Section2/Section2Outlets/section21/Section21";
import Section22 from "./Components/Section/Section2/Section2Outlets/Section22/Section22";
import Section23 from "./Components/Section/Section2/Section2Outlets/Section23/Section23";
import Main from "./Pages/Main";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Main />}>
          <Route index element={<HomeNav />} />
          <Route path="/into" element={<Section21 />} />
          <Route path="/guide" element={<Section22 />} />
          <Route path="/features" element={<Section23 />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
