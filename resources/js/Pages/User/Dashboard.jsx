import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage, Link } from "@inertiajs/react";
import NotesList from "@/Components/NoteList";

const Dashboard = () => {
    const { auth, notes } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800"></h2>
            }
        >
            <div className="p-6">
                <div className="mb-4">
                    <Link
                        href="/user/notes/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Create New Note
                    </Link>
                </div>

                <NotesList notes={notes} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
