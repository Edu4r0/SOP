import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Image from "./pages/Image";
import Survey from "./pages/Survey";
import SurveyClassic from "./pages/Survey/SurveryClassic";
import SurveyCreate from "./pages/SurveyCreate";
import Taks from "./pages/Taks";
import Reports from "./pages/Reports";
import Config from "./pages/Config";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";
import WarningClassic from "./pages/Warning/WarningClassic";


const LayoutContainer = ({ children }) => {
  return (
    <>
      <header className="font-poppins">
        <Header />
      </header>

      <div className="flex font-poppins">
        <nav>
          <Sidebar />
        </nav>
        {children}
      </div>
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<LayoutContainer><Dashboard /></LayoutContainer>} />
        <Route path="/users" element={<LayoutContainer><Users /></LayoutContainer>} />
        <Route path="/image" element={<LayoutContainer><Image /></LayoutContainer>} />
        <Route path="/survey" element={<LayoutContainer><Survey /></LayoutContainer>} />
        <Route path="/survey/surveyclassi/:user" element={<SurveyClassic />} />
        <Route path="/survey/surveycreate" element={<LayoutContainer><SurveyCreate /></LayoutContainer>} />
        <Route path="/tasks" element={<LayoutContainer><Taks /></LayoutContainer>} />
        <Route path="/reports" element={<LayoutContainer><Reports /></LayoutContainer>} />
        <Route path="/setting" element={<LayoutContainer><Config /></LayoutContainer>} />
        <Route path="/games" element={<LayoutContainer><Games /></LayoutContainer>} />
        <Route path="/warning/warningclassi" element={<WarningClassic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;