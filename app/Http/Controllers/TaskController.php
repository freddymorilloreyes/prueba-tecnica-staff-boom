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

class TaskController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Task::search($request->search)->where('user_id', Auth::user()->id);
        if (!is_null($request->complete)) {
            $query->where('complete', $request->complete);
        }
        $tasks = $query->paginate($request->perpage ?? 10);
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
        Gate::authorize('update', $task);
        return Inertia::render('Task/Edit', compact('task'));
    }

    public function update(UpdateTaskRequest $request, Task $task): RedirectResponse
    {
        Gate::authorize('update', $task);
        $data = $request->only('title', 'description', 'expiration_date');
        $task->update($data);
        return to_route('task.list')->with('success', 'Task updated successfully.');
    }

    public function toggleComplete(Task $task)
    {
        Gate::authorize('update', $task);
        $data['complete'] = !$task->complete;
        $task->update($data);
    }

    public function destroy(Task $task): RedirectResponse
    {
        Gate::authorize('delete', $task);
        $task->delete();
        return to_route('task.list')->with('success', 'Task deleted successfully.');
    }
}
