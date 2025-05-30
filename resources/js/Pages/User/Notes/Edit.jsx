import React, { useState } from "react";
import { Head, usePage, router } from "@inertiajs/react";

const Edit = () => {
    const { note } = usePage().props;
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/user/notes/${note.id}`, { title, content });
    };

    return (
        <>
            <Head title="Edit Note" />
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Edit Note</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block">Content</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="border rounded w-full p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Update
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
