<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{



   public function updateRole(Request $request, User $user)
{
    $request->validate([
        'role' => 'required|in:admin,user',
    ]);

    $user->role = $request->role;
    $user->save();

    return back()->with('success', 'User role updated successfully.');
}


public function destroy(User $user)
{
    // Prevent deleting yourself
    if (Auth::id() === $user->id) {
        return back()->with('error', 'You cannot delete yourself.');
    }

    $user->delete();

    return back()->with('success', 'User deleted successfully.');
}


}
