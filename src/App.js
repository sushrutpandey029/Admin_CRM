import LoginScreen from '../src/components/screens/LoginRegistrationScreen/LoginScreen';
import RegistrationScreen from '../src/components/screens/LoginRegistrationScreen/RegistrationScreen'
import AdminDesk from './components/screens/AdminDesk';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderBar from './components/bars/HeaderBar';
import LeadRegistration from './components/screens/LoginRegistrationScreen/LeadRegistration';
import AdminProfile from '../src/components/profiles/AdminProfile'
import DemoProfile from './components/profiles/DemoProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminDesk/>}></Route>
        <Route path='/register' element={<RegistrationScreen/>}></Route>
        <Route path='/login' element={<LoginScreen/>}></Route>
        <Route path='/headerbar' element={<HeaderBar/>}></Route>
        <Route path='/leadregister' element={<LeadRegistration/>}></Route>
        <Route path='/adminprofile' element={<AdminProfile/>}></Route>
        <Route path='demoprofile' element={<DemoProfile/>}></Route>
     </Routes>
    </BrowserRouter>
     
  );
}

export default App;
