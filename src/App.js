// App.js
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact/Contact.js";

const App = () => {
  return (
    <>
      <router>
        <div className="App">
          <NavBar />
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </router>
    </>
  );
};

export default App;
