<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class NoteController extends Controller
{

     use AuthorizesRequests;
    public function index()
    {
        $notes = Auth::user()->notes()->latest()->get();

        return inertia('User/Dashboard', [
            'notes' => $notes,

        ]);
    }

    public function create()
    {
        return inertia('User/Notes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        Auth::user()->notes()->create($request->only('title', 'content'));

        return redirect()->route('user.dashboard')->with('success', 'Note created.');
    }

    public function edit(Note $note)
    {
        $this->authorize('view', $note);

        return inertia('User/Notes/Edit', [
            'note' => $note,

        ]);
    }

    public function update(Request $request, Note $note)
    {
        $this->authorize('update', $note);

        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $note->update($request->only('title', 'content'));

        return redirect()->route('user.dashboard')->with('success', 'Note updated.');
    }

    public function destroy(Note $note)
    {
        $this->authorize('delete', $note);

        $note->delete();

        return redirect()->route('user.dashboard')->with('success', 'Note deleted.');
    }
}
