import "./App.css";
import "./layout.scss";
import { Navbar } from "./components/navBar/Navbar";
import { HomePage } from "./pages/homepage/HomePage";
function App() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
