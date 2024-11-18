<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use App\Service\Task\UseCase\CreateTaskUseCase;
use App\Service\Task\UseCase\DestroyTaskUseCase;
use App\Service\Task\UseCase\ToggleCompleteTaskUseCase;
use App\Service\Task\UseCase\UpdateTaskUseCase;
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
        $tasks = $query->paginate($request->perpage ?? 12);
        return Inertia::render('Task/Index', compact('tasks'));
    }

    public function create(): Response
    {
        return Inertia::render('Task/Create');
    }

    public function store(StoreTaskRequest $request, CreateTaskUseCase $useCase): RedirectResponse
    {
        $useCase->handle($request);
        return to_route('task.list')->with('success', 'Task created successfully.');
    }

    public function edit(Task $task): Response
    {
        Gate::authorize('update', $task);
        return Inertia::render('Task/Edit', compact('task'));
    }

    public function update(UpdateTaskRequest $request, Task $task, UpdateTaskUseCase $useCase): RedirectResponse
    {
        $useCase->handle($request, $task);
        return to_route('task.list')->with('success', 'Task updated successfully.');
    }

    public function toggleComplete(Task $task, ToggleCompleteTaskUseCase $useCase)
    {
        $useCase->handle($task);
    }

    public function destroy(Task $task, DestroyTaskUseCase $useCase): RedirectResponse
    {
        $useCase->handle($task);
        return to_route('task.list')->with('success', 'Task deleted successfully.');
    }
}
