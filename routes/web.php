<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\NoteController as UserNoteController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// User routes (for role = 'user')
Route::middleware(['auth', 'role:user'])->prefix('user')->name('user.')->group(function () {
    // Use NoteController@index for dashboard so it includes notes
    Route::get('dashboard', [UserNoteController::class, 'index'])->name('dashboard');

    // CRUD routes for notes
    Route::resource('notes', UserNoteController::class)->except(['show']);
});

// Admin routes (for role = 'admin')
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('users', [AdminUserController::class, 'index'])->name('users.index');
    // Add more admin routes as needed
});

require __DIR__.'/auth.php';
