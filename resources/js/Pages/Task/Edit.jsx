import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx"
import {Head, Link, useForm} from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel.jsx"
import TextInput from "@/Components/TextInput.jsx"
import InputError from "@/Components/InputError.jsx"
import Checkbox from "@/Components/Checkbox.jsx"
import PrimaryButton from "@/Components/PrimaryButton.jsx"
import Form from "@/Pages/Task/Form.jsx";

const Edit = ({task}) => {

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Update Task
                    </h2>
                    <Link href={route('task.list')}>
                        Task List
                    </Link>
                </div>
            }
        >
            <Head title="Create Task"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <Form task={task} submitButton="Update"/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit
