import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Layout } from "./components/layout";
import { Register } from "./components/register";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
