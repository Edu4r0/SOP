import Nav from "./components/Nav";
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  const Layout = () => {
    return (
      <>
        <header className="font-poppins">
          <Nav />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Dashboard />
        </div>
      </>
    );
  };

  const Page = () => {
    return (
      <div>
        <header className="font-poppins">
          <Nav />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Users />
        </div>
      </div>
    );
  };


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/users" element={<Page />} />

        </Routes>
      </BrowserRouter>
    );

}

export default App;
