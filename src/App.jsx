import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import CartDetails from './components/CartDetails'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<CartDetails />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
