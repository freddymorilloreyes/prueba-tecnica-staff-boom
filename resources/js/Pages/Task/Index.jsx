import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import Pagination from "@/Components/Pagination.jsx";
import {useState} from "react";
import Filters from "@/Pages/Task/Filters.jsx";
import List from "@/Pages/Task/List.jsx";

const Index = ({tasks}) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        My Tasks
                    </h2>
                    <Link href={route('task.create')} className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 false ">
                        Create Task
                    </Link>
                </div>
            }
        >
            <Head title="Task List"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Filters setIsLoading={setIsLoading}/>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <List tasks={tasks.data} isLoading={isLoading}/>
                    </div>
                    <div className="py-12 px-4">
                        <Pagination links={tasks.links}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index
