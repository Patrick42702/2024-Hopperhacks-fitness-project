import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Layout } from "./components/layout";
import { Home } from "./components/home";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home/>}/>
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
