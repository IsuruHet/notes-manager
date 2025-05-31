<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;

class DashboardController extends Controller
{
    public function index()
    {
         return inertia('Admin/Dashboard', [
        'users' => User::where('id', '!=',Auth::id())->get()

    ]);
    }
}
