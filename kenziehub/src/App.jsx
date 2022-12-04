import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landingPage";
import { LoginPage } from "./pages/loginPage/loginPage";
import { NotFound } from "./pages/notFount/notFound";
import { RegisterPage } from "./pages/registerPage/registerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
