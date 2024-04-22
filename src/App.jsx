import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/HomePage";
import Layout from "./pages/layout/Layout";
import ListPage from "./pages/listpage/ListPage";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/:id" element={<SinglePage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
 