import { Head, Link, router } from "@inertiajs/react";
import { useEffect } from "react";

export default function Welcome({ auth }) {
    // Redirect to dashboard if authenticated
    useEffect(() => {
        if (auth?.user) {
            if (auth.user.role === "admin") {
                router.visit(route("admin.dashboard")); // make sure this route name exists
            } else if (auth.user.role === "user") {
                router.visit(route("user.dashboard"));
            } else {
                // fallback
                router.visit(route(""));
            }
        }
    }, [auth]);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg mx-auto mt-20 text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Welcome to Notes Manager
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    Manage your notes efficiently with Laravel & Tailwind CSS.
                </p>
                <div className="flex justify-center items-center gap-5">
                    <Link
                        href={route("login")}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                    >
                        Get Started
                    </Link>
                    <Link
                        href={route("register")}
                        className="text-blue-600 border border-gray-600 hover:text-white hover:bg-blue-600 font-semibold py-2 px-4 rounded-lg"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}
