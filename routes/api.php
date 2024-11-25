<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TaskController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'login']);

Route::prefix('task')->middleware('auth:sanctum')->name('api.task.')->group(function () {
    Route::get('list', [TaskController::class, 'index'])->name('list');
    Route::get('{task}', [TaskController::class, 'show'])->name('show');
    Route::post('store', [TaskController::class, 'store'])->name('store');
    Route::patch('{task}/update', [TaskController::class, 'update'])->name('update');
    Route::patch('{task}/toggle/complete', [TaskController::class, 'toggleComplete'])->name('toggle.complete');
    Route::delete('{task}/destroy', [TaskController::class, 'destroy'])->name('destroy');
});
