import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";

const Homepage = lazy(() => import("./pages/Homepage"));
const Createpage = lazy(() => import("./pages/createpage"));
const LoginPage = lazy(() => import("./pages/login"));

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {/* Ensure Navbar re-renders correctly on route changes */}
      {!isLoginPage && <Navbar key={location.pathname} />}
      
      <Suspense fallback={<div style={{ textAlign: "center", fontSize: "1.5rem", marginTop: "50px" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/create" element={<Createpage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
