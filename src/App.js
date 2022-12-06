import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>

  );
}

export default App;
