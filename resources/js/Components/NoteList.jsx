import React from "react";
import { Link } from "@inertiajs/react";

const NotesList = ({ notes }) => {
    if (!notes || notes.length === 0) {
        return (
            <p className="text-center text-gray-500 mt-10">
                No notes available.
            </p>
        );
    }

    return (
        <ul className="space-y-6 max-w-3xl mx-auto">
            {notes.map((note) => (
                <li
                    key={note.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {note.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        {note.content}
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Link
                            href={`/user/notes/${note.id}/edit`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded hover:bg-blue-200 transition"
                        >
                            ✏️ Edit
                        </Link>
                        <Link
                            as="button"
                            method="delete"
                            href={`/user/notes/${note.id}`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-700 bg-red-100 rounded hover:bg-red-200 transition"
                        >
                            🗑️ Delete
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;
