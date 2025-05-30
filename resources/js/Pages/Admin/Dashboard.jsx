import React from "react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Dashboard = () => {
    const { auth } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800"></h2>
            }
        >
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <p>Welcome, {auth.user.name} (Admin)</p>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
