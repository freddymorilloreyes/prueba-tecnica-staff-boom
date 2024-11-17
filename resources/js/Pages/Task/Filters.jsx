import {router} from "@inertiajs/react";
import TextInput from "@/Components/TextInput.jsx";
import {debounce} from "lodash";
import {useMemo, useRef, useState} from "react";
import {getCurrentParams} from "@/Utils/getCurrentParams.js";

const Filters = ({setIsLoading}) => {


    const currentParams = getCurrentParams();

    const perpage = useRef(currentParams['perpage'] ?? 10);
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

    return (
        <>
            <select
                name="perpage"
                id="perpage"
                defaultValue={perpage.current}
                onChange={handleChangePerpage}
            >
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
            <select
                name="complete"
                id="complete"
                defaultValue={complete.current}
                onChange={handleChangeComplete}
            >
                <option value=''>All</option>
                <option value='1'>Complete</option>
                <option value='0'>Not complete</option>
            </select>
            <TextInput
                id="search"
                name="search"
                value={search}
                onChange={handleChangeSearch}
                className="mt-1 block w-full"
                isFocused={true}
            />
        </>
    )
}

export default Filters
