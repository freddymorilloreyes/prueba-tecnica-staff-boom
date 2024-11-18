<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Service\Task\UseCase\CreateTaskUseCase;
use App\Service\Task\UseCase\DestroyTaskUseCase;
use App\Service\Task\UseCase\ToggleCompleteTaskUseCase;
use App\Service\Task\UseCase\UpdateTaskUseCase;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $tasks = $request->user()->tasks;
        return TaskResource::collection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request, CreateTaskUseCase $useCase): TaskResource
    {
        return new TaskResource($useCase->handle($request));
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task): TaskResource
    {
        Gate::authorize('view', $task);
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task, UpdateTaskUseCase $useCase): TaskResource
    {
        return new TaskResource($useCase->handle($request, $task));
    }

    public function toggleComplete(Task $task, ToggleCompleteTaskUseCase $useCase): TaskResource
    {
        return new TaskResource($useCase->handle($task));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, DestroyTaskUseCase $useCase)
    {
        $useCase->handle($task);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
