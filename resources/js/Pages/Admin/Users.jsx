import React from "react";
import { Head, usePage } from "@inertiajs/react";

const Users = () => {
    const { users } = usePage().props;

    return (
        <>
            <Head title="Manage Users" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">User Management</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} ({user.email}) - {user.role}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Users;
