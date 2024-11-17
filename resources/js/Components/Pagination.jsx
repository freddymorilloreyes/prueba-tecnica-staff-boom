import {Link} from "@inertiajs/react";
import {getCurrentParams} from "@/Utils/getCurrentParams.js";

const Pagination = ({links}) => {

    const currentParams = getCurrentParams();
    delete (currentParams.page)
    return (
        <>
            {links.length === 3 ? null : (// 3 signifi que es una pagina y los botones d eprevious y next
                links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={`${link.url}&${new URLSearchParams(currentParams).toString()}`}
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
                )
            )}
        </>
    );
};

export default Pagination;
