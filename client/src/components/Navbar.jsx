import { useNavigate, NavLink } from "react-router-dom";
import CustomButton from "./Helper/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../slice/settingsSlice";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
function Navbar() {
    let isSettingsOn = useSelector((state) => state.settings.value);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let navList = [
        {
            name: "homepage",
            icon: null,
            handleClick: () => {
                navigate("/");
            },
        },
        {
            name: "about",
            icon: null,
            handleClick: () => {
                navigate("/about");
            },
        },
        {
            name: "settings",
            icon: (
                <Cog6ToothIcon
                    className={`h-5 w-5 transition-transform duration-1000 ${
                        isSettingsOn ? "rotate-90" : ""
                    }`}
                />
            ),
            handleClick: () => {
                dispatch(toggle());
            },
        },
    ];
    return (
        <div className="navbar-container">
            <div className="navbar-title">Welcome !</div>

            <nav className="navbar-buttons-container">
                {navList.map((navItem) => (
                    <CustomButton
                        handleClick={navItem.handleClick}
                        key={navItem.name}
                        name={navItem.name}
                        icon={navItem.icon}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Navbar;
