import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Login from './Components/User/Login/Login';
import SignUp from './Components/User/SignUp/SignUp';


function App() {
  return (
    <div className="">
        <Header></Header>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
