import {Link} from "@inertiajs/react";
import React, {useState} from "react";
import {Slide, toast} from "react-toastify";
import {Button, Card} from "flowbite-react";
import {Pencil, Trash2} from "lucide-react";
import DeleteTaskForm from "@/Pages/Task/DeleteTaskForm.jsx";

const DetailsCard = ({task}) => {

    const [complete, setComplete] = useState(task.complete)
    const [processing, setProcessing] = useState(false)
    const handleToggleComplete = () => {
        setProcessing(true)
        axios.patch(route('task.toggle.complete', task))
            .then(response => {
                setComplete(!complete);
                toast.success('Task updated successfully.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                })
            })
            .catch(error => {
                toast.error('Error updating task', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Slide,
                });
            })
            .finally(() => {
                setProcessing(false)
            })
    };
    return (
        <>
            <div className={`p-4 shadow sm:rounded-lg sm:p-8 ${complete ? "bg-green-100" : "bg-white"}`}>
                <section className="space-y-6 max-w-xl">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">{task.title}</h2>
                        <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                    </header>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" checked={complete} disabled={processing}
                                       onChange={handleToggleComplete}/>
                                <div
                                    className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span
                                    className="ms-3 text-sm font-medium">{complete ? 'Completed' : 'Pending'}</span>
                            </label>
                        </div>
                        <div className="flex space-x-2">
                            <Link href={route('task.edit', [task])}
                                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Pencil className=""/>
                            </Link>
                            <DeleteTaskForm task={task}/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default DetailsCard
