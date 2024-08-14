import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
function Homepage() {
    const isSidebarOn = useSelector((state) => state.settings.value);
    return (
        <div className=" main">
            HOME
            <Navbar />
            <Sidebar isOpen={isSidebarOn} />
        </div>
    );
}

export default Homepage;
