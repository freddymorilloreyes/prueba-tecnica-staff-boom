<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('task')->middleware('auth')->name('task.')->group(function () {
    Route::get('list', [TaskController::class, 'index'])->name('list');
    Route::get('create', [TaskController::class, 'create'])->name('create');
    Route::post('store', [TaskController::class, 'store'])->name('store');
    Route::get('{task}/edit', [TaskController::class, 'edit'])->name('edit');
    Route::patch('{task}/update', [TaskController::class, 'update'])->name('update');
    Route::patch('{task}/toggle/complete', [TaskController::class, 'toggleComplete'])->name('toggle.complete');
    Route::delete('{task}/destroy', [TaskController::class, 'destroy'])->name('destroy');
});

require __DIR__.'/auth.php';
