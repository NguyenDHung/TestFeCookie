import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import RenderRoute from "./routes/RenderRoute";
import { privateRoutes, publicRoutes } from "./routes/Route";
import AdminLayout from "./components/layouts/AdminLayout";
import UserManagerment from "./pages/Admin/UserManagerment";
import CampaignManagerment from "./pages/Admin/CampaignManagerment";
import PreOrderCampaign from "./pages/Admin/PreOrderCampaign";
import Voucher from "./pages/Admin/Voucher";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => RenderRoute(route, index))}
          {privateRoutes.map((route, index) => RenderRoute(route, index, true))}
        </Routes>
  
      </Router>
    </AuthProvider>
  );
}

export default App;
