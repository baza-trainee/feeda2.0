import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Layout from './components/Layout/Layout';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/forgot-pass"
          element={<RegisterPage />}
        />
      </Routes>
    </>
  );
}

export default App;
