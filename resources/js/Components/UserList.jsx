import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function UserList({ users }) {
    const [userList, setUserList] = useState(users);

    const handleRoleChange = (userId, newRole) => {
        router.patch(
            route("admin.users.updateRole", userId),
            { role: newRole },
            {
                onSuccess: () => {
                    // update the user role in local state
                    setUserList((prev) =>
                        prev.map((user) =>
                            user.id === userId
                                ? { ...user, role: newRole }
                                : user
                        )
                    );
                },
            }
        );
    };

    const handleDelete = (userId) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("admin.users.destroy", userId), {
                onSuccess: () => {
                    setUserList((prev) => prev.filter((u) => u.id !== userId));
                },
            });
        }
    };

    return (
        <div>
            <h2 className="text-xl font-semibold m-6">Manage Users</h2>
            <table className="w-full table-auto border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="p-2 text-center">{user.name}</td>
                            <td className="p-2 text-center">{user.email}</td>
                            <td className="p-2 text-center">
                                <select
                                    value={user.role}
                                    onChange={(e) =>
                                        handleRoleChange(
                                            user.id,
                                            e.target.value
                                        )
                                    }
                                    className="border rounded px-6 py-1"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="p-2 text-center">
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
