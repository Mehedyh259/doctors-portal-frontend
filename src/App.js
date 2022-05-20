import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import PaymentPrice from './Pages/Dashboard/PaymentPrice';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-7 lg:px-12'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />

        {/* nested route */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReview />} />
          <Route path='history' element={<MyHistory />} />
          <Route path='payment/:appId' element={<PaymentPrice />} />


          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors /></RequireAdmin>} />
        </Route>



      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
