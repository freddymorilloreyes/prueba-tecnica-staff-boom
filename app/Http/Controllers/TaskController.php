<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    public function index(): Response
    {
        $tasks = Auth::user()->tasks;
        return Inertia::render('Task/Index', compact('tasks'));
    }

    public function create(): Response
    {
        return Inertia::render('Task/Create');
    }

    public function store(StoreTaskRequest $request)
    {
        $data = $request->only('title', 'description', 'expiration_date', 'complete');
        Auth::user()->tasks()->create($data);
        return to_route('task.list')->with('success', 'Tarea creada correctamente');
    }
}
