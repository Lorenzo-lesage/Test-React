// Rounting
import { Routes, Route } from "react-router";

// Layout
import { NavBar } from "./components/NavBar";

// Components
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {

  return (
    <div className="bg-background min-h-screen">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
