import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Layout } from "./components/layout";
import { Register } from "./components/register";
import { Home } from "./components/home";
import { Add_workout } from "./components/add_workout";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="workout" element={<Add_workout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
