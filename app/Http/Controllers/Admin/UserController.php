<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return inertia('Admin/Users', [
            'users' => $users,
            'auth' => ['user' => Auth::user()],
        ]);
    }
}
