import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css';
import NavBar from "./components/navbar/navbar";
import Home from "./components/home/home";
import { Routes,Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <NavBar />

          <Route path="/" element ={<Home/>}/>
          <Route index element = {<Home/>}     />
         
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
