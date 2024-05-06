import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
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
