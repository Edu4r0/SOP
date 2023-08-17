import Nav from "./components/Nav";
import Users from "./components/Users";
import Image from "./components/Image";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes , Route } from "react-router-dom";
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

  const User = () => {
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

  const Images = () => {
    return (
      <div>
        <header className="font-poppins">
          <Nav />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Image />
        </div>
      </div>
    );
  };


    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/users" element={<User />} />
          <Route path="/image" element={<Images />} />
          
        </Routes>
      </BrowserRouter>
    );

}

export default App;
