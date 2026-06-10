import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";

export default function MainLayout () {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="max-w-7xl mx-auto py-6">
                <Outlet />
            </main>

            <footer className="bg-slate-100 text-center p-4">
                &copy; 2026 Universitas Harkat Negeri
            </footer>
        </div>
    );
}