import React from "react";
import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserList from "@/Components/UserList";

const Dashboard = () => {
    const { auth, users = [] } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <div className="m-6">
                <UserList users={users} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
