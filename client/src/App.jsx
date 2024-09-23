import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home'; 

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // se aq der algum tipo 'erro' falando "is missing in props validation", é só ignorar ou apagar o arquivo 'eslint.config.js'
  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home setToken={setToken} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
