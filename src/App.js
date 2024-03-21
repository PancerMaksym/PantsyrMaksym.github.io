import {Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout"; // Перевірте шлях до Layout
import Homepage from "./pages/Homepage"; // Перевірте шлях до Homepage
import Mail from "./pages/Mail"; // Перевірте шлях до Mail

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
