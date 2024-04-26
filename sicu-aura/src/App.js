import logo from './logo.svg';
import './App.css';
import { Login } from './page/login';
import { Route, Routes } from 'react-router-dom';
import { WebcamCapture } from './component/webcam';
import { Detailes } from './page/detailes';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={  <Login />} />
        <Route path="/webcam" element={<WebcamCapture />} />
        <Route path="/detailes" element={<Detailes/>} />
      </Routes>

    </>
  );
}

export default App;
