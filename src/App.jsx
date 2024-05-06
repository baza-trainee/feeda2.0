import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Layout from "./components/Layout/Layout";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Layout/>}>

    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/forgot-pass" element={<RegisterPage/>}/>
    </Route>
  </Routes>
  </>
}

export default App;
