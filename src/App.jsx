import Users from "./pages/Users";
import Taks from "./pages/Taks";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Image from "./pages/Image";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyClassic from "./pages/Survey/SurveryClassic";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";
import Reports from "./pages/Reports";
import SurveyCreate from "./pages/SurveyCreate";
import Header from "./components/Header";
import Config from "./pages/Config";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";
function App() {
  const SingIn = () => {
    return (
      <>
        <main>
          <Login />
        </main>
      </>
    );
  };

  const Layout = () => {
    return (
      <>
        <header className="font-poppins">
          <Header />
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
  const Settings = () => {
    return (
      <>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Config />
        </div>
      </>
    );
  };
  const Game = () => {
    return (
      <>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Games />
        </div>
      </>
    );
  };
  const Report = () => {
    return (
      <>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Reports />
        </div>
      </>
    );
  };

  const Schedule = () => {
    return (
      <>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Taks />
        </div>
      </>
    );
  };

  const User = () => {
    return (
      <div>
        <header className="font-poppins">
          <Header />
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

  const Quizz = () => {
    return (
      <div>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <Survey />
        </div>
      </div>
    );
  };

  const Images = () => {
    return (
      <div>
        <header className="font-poppins">
          <Header />
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

  const QuizzCreate = () => {
    return (
      <div>
        <header className="font-poppins">
          <Header />
        </header>

        <div className="flex font-poppins">
          <nav>
            <Sidebar />
          </nav>
          <SurveyCreate />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<SingIn />} />
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/users" element={<User />} />
        <Route path="/image" element={<Images />} />
        <Route path="/survey" element={<Quizz />} />
        <Route path="/survey/surveyclassi/:user" element={<SurveyClassic />} />
        <Route path="/survey/surveycreate" element={<QuizzCreate />} />
        <Route path="/tasks" element={<Schedule />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
