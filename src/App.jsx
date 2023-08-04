import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
function App() {
  return (
    <>
    <header className="font-poppins">
    <Nav/>
    </header>
    
    <div className="flex font-poppins">
      <nav>
      <Sidebar />
      </nav>
      <Dashboard /> 
    </div>
    </>
  )
}

export default App