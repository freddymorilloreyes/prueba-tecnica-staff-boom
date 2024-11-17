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
            ['title' => 'Salir de compras', 'description' => 'Comprar medicinas para el perro y algunos víveres.', 'expiration_date' => '2024-11-20'],
            ['title' => 'Reunión con el equipo', 'description' => 'Discutir los avances del proyecto y planificar las siguientes tareas.', 'expiration_date' => '2024-11-22'],
            ['title' => 'Hacer ejercicio', 'description' => 'Ir al gimnasio o hacer una rutina en casa.', 'expiration_date' => '2024-11-19'],
            ['title' => 'Actualizar CV', 'description' => 'Añadir la experiencia reciente y mejorar el diseño.', 'expiration_date' => '2024-11-25'],
            ['title' => 'Leer un libro', 'description' => 'Avanzar con el capítulo 5 de la novela.', 'expiration_date' => '2024-11-21'],
            ['title' => 'Visitar al médico', 'description' => 'Chequeo general anual con el doctor.', 'expiration_date' => '2024-11-26'],
            ['title' => 'Preparar presentación', 'description' => 'Crear las diapositivas para la reunión del lunes.', 'expiration_date' => '2024-11-24'],
            ['title' => 'Limpiar la casa', 'description' => 'Organizar el escritorio y limpiar la sala.', 'expiration_date' => '2024-11-23'],
            ['title' => 'Pagar facturas', 'description' => 'Pagar el servicio de internet y la luz.', 'expiration_date' => '2024-11-18'],
            ['title' => 'Enviar reportes', 'description' => 'Enviar el reporte mensual al jefe.', 'expiration_date' => '2024-11-27'],
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
