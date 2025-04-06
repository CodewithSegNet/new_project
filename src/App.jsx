import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage.jsx/index.jsx";
import ScrollToTop from "./layouts/ScrolltoTop.jsx";





function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <ScrollToTop />
          <Routes>

            <Route path="/" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
