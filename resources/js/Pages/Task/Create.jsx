import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx"
import {Head, Link, useForm} from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel.jsx"
import TextInput from "@/Components/TextInput.jsx"
import InputError from "@/Components/InputError.jsx"
import Checkbox from "@/Components/Checkbox.jsx"
import PrimaryButton from "@/Components/PrimaryButton.jsx"

const Create = () => {

    const {data, setData, post, processing, errors} = useForm({
        title: '',
        description: '',
        expiration_date: '',
        complete: false,
    })

    const submit = (e) => {
        e.preventDefault()
        // console.log(data)
        post(route('task.store'))
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create Task
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
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="title" value="Title"/>

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />

                                    <InputError message={errors.title} className="mt-2"/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="description" value="Description"/>

                                    <TextInput
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('description', e.target.value)}
                                    />

                                    <InputError message={errors.title} className="mt-2"/>
                                </div>
                                <div>
                                    <InputLabel htmlFor="expiration_date" value="Expiration date"/>

                                    <TextInput
                                        id="expiration_date"
                                        type="date"
                                        name="expiration_date"
                                        value={data.expiration_date}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData('expiration_date', e.target.value)}
                                    />

                                    <InputError message={errors.title} className="mt-2"/>
                                </div>
                                <div className="mt-4 block">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="complete"
                                            checked={data.complete}
                                            onChange={(e) =>
                                                setData('complete', e.target.checked)
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                            Complete
                        </span>
                                    </label>
                                </div>

                                <div className="mt-4 flex items-center justify-end">

                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Create
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create
