import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { HomePage } from "./pages/homepage/HomePage";
import Layout from "./pages/layout/Layout";
import ListPage from "./pages/listpage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/profile/Profile";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <HomePage />}
          />
          <Route
            path="/register"
            element={!currentUser ? <Register /> : <HomePage />}
          />
          <Route path="/list" element={<ListPage />} />
          <Route path="/:id" element={<SinglePage />} />
          {currentUser && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/update" element={<UpdateProfile />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
