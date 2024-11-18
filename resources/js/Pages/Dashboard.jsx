import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import TasksChart from "@/Pages/TasksChart.jsx";

export default function Dashboard({tasks, completed, pending}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            En esta plataforma podrás administrar las tareas por ejecutar y tener al día las
                            obligaciones que se te puedan pasar por alto
                        </div>
                    </div>
                    {tasks > 0 ? (
                            <>
                                <div className="p-6 text-gray-900">
                                    Porcentaje de completadas {tasks > 0 ? Math.round(((completed/tasks)*100)) : 0 } %
                                </div>
                                <TasksChart tasks={tasks} completed={completed} pending={pending}/>
                            </>


                        ) :
                        (
                            <span className='p-6 mt-6'>No tienes tareas registradas registra una
                                <Link
                                    href={route('task.create')}
                                    className="text-blue-500 hover:text-blue-700"> aquí
                                </Link>
                            </span>
                        )
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
