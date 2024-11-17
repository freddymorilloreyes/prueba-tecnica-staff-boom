import {router} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import {debounce} from "lodash";
import {useMemo, useRef, useState} from "react";
import {getCurrentParams} from "@/Utils/getCurrentParams.js";
import {X} from "lucide-react";

const Filters = ({setIsLoading}) => {

    const currentParams = getCurrentParams();
    const perpage = useRef(currentParams['perpage'] ?? 12);
    const complete = useRef(currentParams['complete'] ?? "");
    const [search, setSearch] = useState(currentParams['search'] ?? "");


    const handleSearch = useMemo(() => {
        return debounce((value) => {
            getData(value);
        }, 500);
    }, []);

    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
    };

    const handleChangePerpage = (e) => {
        perpage.current = e.target.value;
        getData(search);
    };

    const handleChangeComplete = (e) => {
        complete.current = e.target.value;
        getData(search);
    };

    const getData = (searchValue) => {
        setIsLoading(true);
        const name = route().current();
        router.get(
            route(name),
            {
                perpage: perpage.current,
                complete: complete.current,
                search: searchValue,
            },
            {
                preserveScroll: true,
                preserveState: true,
                onFinish: () => setIsLoading(false),
            }
        );
    };
    const clearSearch = () => {
        setSearch('');
        getData('')
    };

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
                <div className="w-full md:w-1/3 relative">
                    <label htmlFor="search" className="block mb-2 text-sm font-medium">
                        Search
                    </label>
                    <TextInput
                        id="search"
                        name="search"
                        value={search}
                        onChange={handleChangeSearch}
                        className="mt-1 block w-full focus:border-cyan-500 focus:ring-cyan-500 "
                        isFocused={true}
                    />
                    {search && (
                        <button
                            onClick={clearSearch}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 top-8"
                        >
                            <X className="h-4 w-4 text-gray-500"/>
                        </button>
                    )}
                </div>
                <div className="w-full md:w-1/3">
                    <label htmlFor="perPage" className="block mb-2 text-sm font-medium">
                        Per-page
                    </label>
                    <select
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        name="perpage"
                        id="perpage"
                        defaultValue={perpage.current}
                        onChange={handleChangePerpage}
                    >
                        <option>12</option>
                        <option>24</option>
                        <option>48</option>
                        <option>100</option>
                    </select>
                </div>
                <div className="w-full md:w-1/3">
                    <label htmlFor="status" className="block mb-2 text-sm font-medium">
                        Status
                    </label>
                    <select
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        name="complete"
                        id="complete"
                        defaultValue={complete.current}
                        onChange={handleChangeComplete}
                    >
                        <option value=''>All</option>
                        <option value='1'>Completed</option>
                        <option value='0'>Pending</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filters
