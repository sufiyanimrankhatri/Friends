import './App.css';
import Login from './Componenets/Login';
import SignUp from './Componenets/SignUp';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (

    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<SignUp />}/>
  </Routes>
  );
}

export default App;