import {Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout"; 
import Homepage from "./pages/Homepage"; 
import Mail from "./pages/Mail"; 
import "./App.css";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="mail" element={<Mail />} />
        </Route>
      </Routes>
  );
}

export default App;
