import {useForm} from "@inertiajs/react"
import InputLabel from "@/Components/InputLabel.jsx"
import TextInput from "@/Components/TextInput.jsx"
import InputError from "@/Components/InputError.jsx"
import Checkbox from "@/Components/Checkbox.jsx"
import PrimaryButton from "@/Components/PrimaryButton.jsx"
import TextareaInput from "@/Components/TextareaInput.jsx";

const Form = ({task = null, submitButton = 'Create'}) => {

    const {data, setData, patch, post, processing, errors} = useForm({
        title: task?.title || '',
        description: task?.description || '',
        expiration_date: task?.expiration_date || '',
        complete: false,
    })

    const submit = (e) => {
        e.preventDefault()
        if (task) {
            patch(route('task.update', task))
        } else {
            post(route('task.store'))
        }
    }

    return (
        <form onSubmit={submit} className="space-y-4">
            {/* Fila para Title y Expiration Date */}
            <div className="flex flex-wrap gap-4 md:flex-nowrap">
                <div className="flex-1">
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
                <div className="flex-1">
                    <InputLabel htmlFor="expiration_date" value="Expiration Date"/>
                    <TextInput
                        id="expiration_date"
                        type="date"
                        name="expiration_date"
                        value={data.expiration_date}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('expiration_date', e.target.value)}
                    />
                    <InputError message={errors.expiration_date} className="mt-2"/>
                </div>
            </div>
            <div>
                <InputLabel htmlFor="description" value="Description"/>
                <TextareaInput
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError message={errors.description} className="mt-2"/>
            </div>
            {task ? null : (
                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="complete"
                            checked={data.complete}
                            onChange={(e) => setData('complete', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Complete</span>
                    </label>
                </div>
            )}
            <div className="mt-4 flex items-center justify-end">
                <PrimaryButton className="ms-4" disabled={processing}>
                    {submitButton}
                </PrimaryButton>
            </div>
        </form>

    )
}

export default Form
