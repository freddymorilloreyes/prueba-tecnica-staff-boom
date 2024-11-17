import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import DetailsCard from "@/Pages/Task/DetailsCard.jsx";
import Pagination from "@/Components/Pagination.jsx";
import {useState} from "react";
import Filters from "@/Pages/Task/Filters.jsx";

const Index = ({tasks}) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        My Tasks
                    </h2>
                    <Link href={route('task.create')}>
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
                        <div className="p-6 text-gray-900">
                            {isLoading ? (
                                    <>Loading...</>
                                ) :
                                (
                                    tasks.data.map(task => (
                                        <DetailsCard key={task.id} task={task}/>
                                    ))
                                )}
                        </div>
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
