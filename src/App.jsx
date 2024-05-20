import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
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
import NewPost from "./pages/newPost/NewPost";
import { listLoader, profilePageLoader, singlePageLoader } from "./lib/loader";

function App() {
  const { currentUser } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
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
        <Route path="/list" element={<ListPage />} loader={listLoader} />
        <Route path="/:id" element={<SinglePage />} loader={singlePageLoader} />
        {currentUser && (
          <>
            <Route
              path="/profile"
              element={<Profile />}
              loader={profilePageLoader}
            />
            <Route path="/profile/update" element={<UpdateProfile />} />
            <Route path="/add" element={<NewPost />} />
          </>
        )}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
