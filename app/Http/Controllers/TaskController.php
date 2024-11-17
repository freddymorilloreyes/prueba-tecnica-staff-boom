<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;
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

    public function store(StoreTaskRequest $request): RedirectResponse
    {
        $data = $request->only('title', 'description', 'expiration_date', 'complete');
        Auth::user()->tasks()->create($data);
        return to_route('task.list')->with('success', 'Task created successfully.');
    }

    public function edit(Task $task): Response
    {
        return Inertia::render('Task/Edit', compact('task'));
    }

    public function update(UpdateTaskRequest $request, Task $task): RedirectResponse
    {
        $data = $request->only('title', 'description', 'expiration_date');
        $task->update($data);
        return to_route('task.list')->with('success', 'Task updated successfully.');
    }

    public function toggleComplete(Task $task)
    {
        sleep(1);
        $data['complete'] = !$task->complete;
        $task->update($data);
//        return to_route('task.list')->with('success', 'Task updated successfully.');
    }
}
