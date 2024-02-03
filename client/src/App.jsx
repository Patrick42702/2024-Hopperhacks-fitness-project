import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import { Layout } from "./components/layout";

function App() {
  return (
    <>
    <div>
      Hello
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<Welcome />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
