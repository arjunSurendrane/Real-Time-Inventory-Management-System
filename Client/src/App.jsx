import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
