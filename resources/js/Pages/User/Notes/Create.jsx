import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/user/notes", { title, content });
    };

    return (
        <>
            <Head title="Create Note" />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="bg-white shadow-lg rounded-xl w-full max-w-2xl p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        📝 Create New Note
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter note title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Content
                            </label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none h-40 resize-none"
                                placeholder="Enter note content"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 shadow"
                            >
                                ✅ Save Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;
