import React from "react";
import { Link } from "@inertiajs/react";

const NotesList = ({ notes }) => {
    if (!notes || notes.length === 0) {
        return <p>No notes available.</p>;
    }

    return (
        <ul className="space-y-4">
            {notes.map((note) => (
                <li key={note.id} className="border p-4 rounded shadow-sm">
                    <h3 className="text-lg font-bold">{note.title}</h3>
                    <p>{note.content}</p>
                    <div className="flex gap-4 mt-2">
                        <Link
                            href={`/user/notes/${note.id}/edit`}
                            className="text-blue-600"
                        >
                            Edit
                        </Link>
                        <Link
                            as="button"
                            method="delete"
                            href={`/user/notes/${note.id}`}
                            className="text-red-600"
                        >
                            Delete
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NotesList;
