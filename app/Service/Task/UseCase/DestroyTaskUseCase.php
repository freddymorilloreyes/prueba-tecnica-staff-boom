<?php

namespace App\Service\Task\UseCase;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class DestroyTaskUseCase
{
    public function handle(Task $task)
    {
        Gate::authorize('delete', $task);
        $task->delete();
    }
}
