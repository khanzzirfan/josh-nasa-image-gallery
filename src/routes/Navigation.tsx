import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "../pages/IndexPage";
import { RoverDetailsPage } from "../pages/RoverDetailsPage";
export const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/details/:id" element={<RoverDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
