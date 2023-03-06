import "./assets/css/App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
