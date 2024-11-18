<?php

namespace App\Service\Task\UseCase;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class UpdateTaskUseCase
{
    public function handle(UpdateTaskRequest $request, Task $task): Task
    {
        Gate::authorize('update', $task);
        $data = $request->only('title', 'description', 'expiration_date');
        $task->update($data);
        return $task;
    }
}
