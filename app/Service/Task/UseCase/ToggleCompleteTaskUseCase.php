<?php

namespace App\Service\Task\UseCase;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class ToggleCompleteTaskUseCase
{
    public function handle(Task $task): Task
    {
        Gate::authorize('update', $task);
        $data['complete'] = !$task->complete;
        $task->update($data);
        return $task;
    }
}
