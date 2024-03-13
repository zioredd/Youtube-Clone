import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home category={category} setCategory={setCategory} />}
          />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

// FIRST API = AIzaSyAO3bHP1bMz7mzvtvkfGeaU_SeVPqhzehg
// SECOND API = AIzaSyBsADPzo3vX_e7RgjMmK0ufSaBEv0F7gNs
// THIRD API = AIzaSyCJ788wQeGhUwPJcfpPte5v7p30fzUN4fM
