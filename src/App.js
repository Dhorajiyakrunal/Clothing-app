import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import EditProduct from './Pages/Editproduct';
import Addtoproduct from './Pages/Addtoproduct';
import Adddata from './Pages/Adddata';

function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>} />
        <Route path='/login' element={<Layout><Login/></Layout>} />
        <Route path='/addtoproduct' element={<Addtoproduct/>} />
        <Route path='/editProduct' element={<EditProduct/>} />
        <Route path='/cart' element={<Layout><Cart/></Layout>} />
        <Route path='/register' element={<Layout><Register/></Layout>} />
        <Route path='/adddata' element={<Layout><Adddata/></Layout>} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
