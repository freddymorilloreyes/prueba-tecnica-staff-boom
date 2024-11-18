<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class UserController
{
    public function index(Request $request): Response
    {
        Gate::authorize('update', Auth::user());
        $users = User::with('tasks')->paginate($request->perpage ?? 12);
        return Inertia::render('Admin/User/Index', compact('users'));
    }
}
