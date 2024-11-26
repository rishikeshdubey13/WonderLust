import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationProfile from './pages/DestinationProfile';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import Wishlist from './pages/Wishlist';
import Booking from './pages/booking';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthGuard from './components/AuthGuard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationProfile />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <UserProfile />
              </AuthGuard>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <AuthGuard>
                <EditProfile />
              </AuthGuard>
            }
          />
          <Route
            path="/wishlist"
            element={
              <AuthGuard>
                <Wishlist />
              </AuthGuard>
            }
          />
          <Route
            path="/booking/:id"
            element={
              <AuthGuard>
                <Booking />
              </AuthGuard>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;