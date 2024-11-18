<?php

namespace App\Service\Task\UseCase;

use App\Http\Requests\StoreTaskRequest;
use App\Models\Task;
use Illuminate\Support\Facades\Auth;

class CreateTaskUseCase
{
    public function handle(StoreTaskRequest $request): Task
    {
        $data = $request->only('title', 'description', 'expiration_date', 'complete');
        return Auth::user()->tasks()->create($data);
    }
}
