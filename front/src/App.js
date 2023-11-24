import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css';
import Barra from "./components/navbar/navbar";
import Home from "./components/home/home";
import Productos from "./components/productos/productos";
import Admin from "./components/Admin/admin";


import { Routes,Route, BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />

          <Route path="admin" element={<Admin />} />
          <Route path="productos" element={<Productos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
