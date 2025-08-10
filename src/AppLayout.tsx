import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import MainContainer from "./pages/MainContainer";
import NewsDetailPage from "./components/entertainment/Entertainment";
// import Entertainment from "./components/entertainment/Entertainment";

function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/:id" element={<NewsDetailPage />} />
        <Route path="/detailpage/:id" element={<MainContainer />} />
      </Routes>
      {location.pathname !== "/business" && <Footer />}
    </>
  );
}

export default AppLayout;