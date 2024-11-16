<?php

use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->name('admin.')
    ->middleware(EnsureUserIsAdmin::class)
    ->group(function () {
        Route::get('/users', function () {
            return view('admin.dashboard');
        })->name('users');
    });
