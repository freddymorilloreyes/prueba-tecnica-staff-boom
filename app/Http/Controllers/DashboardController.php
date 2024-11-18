<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $dataTask = [
            'tasks' => Task::where('user_id', Auth::id())->count(),
            'completed' => Task::where('user_id', Auth::id())->where('complete', 1)->count(),
            'pending' => Task::where('user_id', Auth::id())->where('complete', 0)->count(),
        ];
        return Inertia::render('Dashboard', $dataTask);
    }
}
