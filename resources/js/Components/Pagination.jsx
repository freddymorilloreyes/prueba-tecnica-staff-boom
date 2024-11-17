import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import DetailsCard from "@/Pages/Task/DetailsCard.jsx";

const Pagination = ({links}) => {

    return (
        <>
            {links.map((link) =>
                link.url ? (
                    <Link
                        key={link.label}
                        href={link.url}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className={`p-1 mx-1 ${
                            link.active ? "text-blue-500 font-bold" : ""
                        }`}
                    />
                ) : (
                    <span
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: link.label}}
                        className="p-1 mx-1 text-slate-300"
                    ></span>
                )
            )}
        </>
    )
}

export default Pagination
