<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Admin Staff Boom',
            'email' => 'admin@staffboom.com',
            'role' => 'Admin',
            'password' => Hash::make('admin'),
        ]);
        DB::table('users')->insert([
            'name' => 'User Staff Boom',
            'email' => 'user@staffboom.com',
            'password' => Hash::make('user'),
        ]);

        User::factory()
            ->count(10)
            ->create();
    }
}
