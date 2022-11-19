import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section/Section1/Section1";
import Section2 from "./Components/Section/Section2/Section2";
import Section21 from "./Components/Section/Section2/Section2Outlets/section21/Section21";
import Section22 from "./Components/Section/Section2/Section2Outlets/Section22/Section22";
import Section23 from "./Components/Section/Section2/Section2Outlets/Section23/Section23";

import SubNav from "./Components/SubNav/SubNav";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import Home from "./Pages/Home";
import Main from "./Pages/Main";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Main />}>
          <Route index element={<Section21 />} />
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
