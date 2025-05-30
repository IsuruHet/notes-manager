import React from "react";
import { Head, usePage } from "@inertiajs/react";

const Dashboard = () => {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <p>Welcome, {auth.user.name} (Admin)</p>
            </div>
        </>
    );
};

export default Dashboard;
