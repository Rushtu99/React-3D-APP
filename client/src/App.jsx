import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
// import CanvasModule from "./components/CanvasModule";
import About from "./components/About";
import NoPage from "./components/NoPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        // <div>
        // <Homepage />
        // {/* <CanvasModule /> */}
        // </div>
    );
}

export default App;
