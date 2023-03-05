import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import DataTable from "./pages/Table";
import "./styles/main.scss";


function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/table" element={<DataTable/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
