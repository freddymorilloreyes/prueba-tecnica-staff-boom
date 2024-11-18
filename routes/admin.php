<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')
    ->name('admin.')
    ->middleware(EnsureUserIsAdmin::class)
    ->group(function () {
        Route::get('users', [UserController::class, 'index'])->name('users');
    });
