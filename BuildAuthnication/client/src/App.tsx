import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AuthProvider from "./contexts/AuthContext";

import Register from "./loginPges/Register";
import Login from "./loginPges/Login";
import ErrorMessage from "./layouts/ErrorMessage";
import Profile from "./components/Profile";
import Header from "./layouts/Header";
import WithPrivateRoute from "./utils/WithPrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <ErrorMessage />
        <div className="App">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <WithPrivateRoute>
                  <Profile />
                </WithPrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
