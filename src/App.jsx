import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Layout from './components/Layout/Layout';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import FailedPage from './pages/FailedPage/FailedPage';
import PassedPage from './pages/PassedPage/PassedPage';
import AddPage from './pages/AddPage/AddPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*<Route index element={<Navigate to="/login" />} />*/}
          <Route
            path="settings"
            element={<SettingsPage />}
          />
          <Route path="failed" element={<FailedPage />} />
          <Route path="passed" element={<PassedPage />} />
          <Route path="add" element={<AddPage />} />

          <Route path="login" element={<LoginPage />} />
          <Route
            path="register"
            element={<RegisterPage />}
          />
          <Route
            path="forgot-pass"
            element={<RegisterPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
