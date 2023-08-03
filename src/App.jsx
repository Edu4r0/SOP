import Nav from "./components/Nav"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
function App() {
  return (
    <>
    <Nav/>
    
    <div className="flex">
      <Sidebar />
      <Dashboard /> 
    </div>
    </>
  )
}

export default App