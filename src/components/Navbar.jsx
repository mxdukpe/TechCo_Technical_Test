import { Link} from "react-router-dom";
import logo from "../image/BatKawaii.png";

function NavBar() {
    return (
        <>
            <nav className="z-0 relative p-4"
                x-data="{open:false,menu:false, lokasi:false}"
            >
                <div className="flex bg-emerald-100 rounded-lg text-end p-4">
                    {/* IMAGES */}
                    {/* <Link to="/mypngs"> */}
                        <img
                            className="h-20"
                            src={logo}
                            alt="Logo"
                        />
                    {/* </Link> */}

                   {/* Login */}
                    <Link
                        to="/"
                        className="font-semibold pl-96 text-2xl rounded-lg">
                        <span className="">Login</span>
                    </Link>

                    {/* LOGOUT */}
                    <Link
                        to="/logout"
                        className="font-semibold pl-96 text-2xl rounded-lg">
                        <span className="">Logout</span>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;