import { Outlet } from "react-router-dom"
import Header from "../components/ui/Header"

export default function AuthLayout() {
    return (
        <>
            <Header />
            <div className="grid grid-cols-2 items-center min-h-screen">

                <div className="bg-white h-screen flex flex-col items-center justify-center gap-4">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="Invofest Logo"
                        className="w-96"
                    />
                </div>

                <div className="p-6">
                    <Outlet />
                </div>
            </div>
            <footer className="bg-slate-100 text-center p-4">
                &copy; 2026 Universitas Harkat Negeri
            </footer>
        </>
    )
}