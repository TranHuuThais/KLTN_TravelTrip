import { Routes, Route } from "react-router-dom";
import "./App.css";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import NoFooterLayout from "./layouts/NoFooterLayout";

// Pages (Home)
import Index from "./pages/Home/Index/Index";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Tours from "./pages/Home/Tours/Tours";
import TourDetails from "./pages/Home/Tours/TourDetails";
import Booking from "./pages/Home/Booking/Booking";
import Destinations from "./pages/Home/Destinations/Destinations";
import DestinationDetails from "./pages/Home/Destinations/DestinationDetails";
import PhotoGallery from "./pages/Home/PhotoGallery/PhotoGallery";

// Pages (Auth)
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Profile from "./components/Profile/Profile";
import Notifications from "./components/notifications/notifications";
import NotificationDetail from "./components/notifications/NotificationDetail";

// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="tours" element={<Tours />} />
        <Route path="/tour-details/:id" element={<TourDetails />} />
        <Route path="booking" element={<Booking />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="gallery" element={<PhotoGallery />} />
      </Route>

      {/* Admin layout routes */}
      <Route element={<AdminLayout />}>
        <Route path="admin" element={<Dashboard />} />
        {/* Add more admin routes as needed */}
      </Route>

      {/* NoFooterLayout for login and registration */}
      <Route element={<NoFooterLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="/notifications/:id" element={<NotificationDetail />} />
      </Route>

      {/* Fallback route (404 page) */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
