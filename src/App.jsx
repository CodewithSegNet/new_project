import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx";





function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
