<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tasks = [
            ['title' => 'Go shopping', 'description' => 'Buy medicines for the dog and some groceries.'],
            ['title' => 'Team meeting', 'description' => 'Discuss project progress and plan the next tasks.'],
            ['title' => 'Exercise', 'description' => 'Go to the gym or do a home workout routine.'],
            ['title' => 'Update CV', 'description' => 'Add recent experience and improve the design.'],
            ['title' => 'Read a book', 'description' => 'Progress through chapter 5 of the novel.'],
            ['title' => 'Visit the doctor', 'description' => 'Annual general check-up with the doctor.'],
            ['title' => 'Prepare presentation', 'description' => 'Create slides for the Monday meeting.'],
            ['title' => 'Clean the house', 'description' => 'Organize the desk and clean the living room.'],
            ['title' => 'Pay bills', 'description' => 'Pay for internet and electricity services.'],
            ['title' => 'Send reports', 'description' => 'Send the monthly report to the boss.'],
        ];

        $randomNumber = rand(0, 9);
        $randomUserId = rand(1, 10);
        $task = $tasks[$randomNumber];
        return [
            'title' => $task['title'] . $randomUserId . $randomNumber,
            'description' => $task['description'],
            'expiration_date' => $this->getRandomDateNextMonth(),
            'user_id' => $randomUserId,
            'complete' => $randomNumber % 2 == 0 ? 1 : 0,
        ];
    }

    private function getRandomDateNextMonth(): string
    {
        $startDate = strtotime('-1 week');
        $endDate = strtotime('+1 month');

        $randomTimestamp = rand($startDate, $endDate);

        return date('Y-m-d', $randomTimestamp);
    }
}
