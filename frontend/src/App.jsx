import { Route, Routes } from "react-router-dom";
import { PreLanding } from "./pages/PreLanding/PreLanding";
import { FromPage } from "./pages/FormPage/FromPage";
import { ThankYouPage } from "./pages/ThankYouPage/ThankYouPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PreLanding />} />
      <Route path="/form" element={<FromPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
