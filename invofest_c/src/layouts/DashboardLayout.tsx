import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const handlelogout = () => {
        logout();

        navigate("/login");
    }
    return (
        <div className="flex w-full min-h-screen ">
            <div className="bg-pink-200 w-64 flex flex-col justify-between sticky top-0 h-screen p-4 shrink-0">
                <div className="w-full justify-between font-bold text-center">
                    <img src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" alt="invofest" />
                </div>
                <div className="w-full justify-between p-4">
                    <ul className="flex flex-col gap-6 w-full">
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/category">Category</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/pembicara">Pembicara</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/event">Event</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button"
                        onClick={handlelogout}
                        className="w-full p-4 bg-red-900 text-white rounded-2xl cursor-pointer hover:bg-red-400">
                        Logout
                    </button>
                </div>

            </div>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    )
};