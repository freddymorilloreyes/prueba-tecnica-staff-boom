import DangerButton from '@/Components/DangerButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import {useForm} from '@inertiajs/react';
import {useRef, useState} from 'react';

export default function DeleteTaskForm({task}) {
    const [confirmingTaskDeletion, setConfirmingTaskDeletion] = useState(false);

    const {
        delete: destroy,
        processing,
        reset,
        clearErrors,
    } = useForm();

    const confirmTaskDeletion = () => {
        setConfirmingTaskDeletion(true);
    };

    const deleteTask = (e) => {
        e.preventDefault();

        destroy(route('task.destroy', task), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => console.log('error'),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingTaskDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <>

            <DangerButton onClick={confirmTaskDeletion}>
                Delete
            </DangerButton>

            <Modal show={confirmingTaskDeletion} onClose={closeModal}>
                <form onSubmit={deleteTask} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your task?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        {task.title}
                    </p>


                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}
