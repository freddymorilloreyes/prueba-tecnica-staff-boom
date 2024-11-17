import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link, router, useForm} from "@inertiajs/react";
import DetailsCard from "@/Pages/Task/DetailsCard.jsx";
import Pagination from "@/Components/Pagination.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {debounce} from "lodash";
import {useMemo, useRef, useState} from "react";

const Index = ({tasks}) => {

    const perpage = useRef(10);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Actualizamos handleSearch para ejecutar debounce correctamente
    const handleSearch = useMemo(() => {
        return debounce((value) => {
            getData(value); // Pasamos el valor actualizado directamente
        }, 500);
    }, []);

    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearch(value); // Actualizamos el estado
        handleSearch(value); // Llamamos a debounce con el valor actualizado
    };

    const handleChangePerpage = (e) => {
        perpage.current = e.target.value;
        getData(search); // Usamos el estado actual para la búsqueda
    };

    const getData = (searchValue) => {
        setIsLoading(true);
        const name = route().current();
        router.get(
            route(name),
            {
                perpage: perpage.current,
                search: searchValue, // Usamos el valor pasado como parámetro
            },
            {
                preserveScroll: true,
                preserveState: true,
                onFinish: () => setIsLoading(false),
            }
        );
    };
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
                    <select
                        name="perpage"
                        id="perpage"
                        value={perpage.current}
                        onChange={handleChangePerpage}
                    >
                        <option>2</option>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <TextInput
                        id="search"
                        name="search"
                        value={search}
                        onChange={handleChangeSearch}
                        className="mt-1 block w-full"
                        isFocused={true}
                    />
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
