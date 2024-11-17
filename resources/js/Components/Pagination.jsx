import {Link} from "@inertiajs/react";
import {getCurrentParams} from "@/Utils/getCurrentParams.js";

const Pagination = ({links}) => {

    const currentParams = getCurrentParams();
    delete (currentParams.page)
    return (
        <div className="flex justify-center mt-4" data-id="45">
            <div className="flex items-center justify-center space-x-2" data-id="1">
                {links.length === 3 ? null : (// 3 significa que es una pagina y los botones de previous y next
                    links.map((link) =>
                        link.url ? (
                            link.label === '&laquo; Previous' ? (
                                <Link
                                    key={link.label}
                                    href={`${link.url}&${new URLSearchParams(currentParams).toString()}`}
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                    color="gray" data-id="2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-chevron-left h-4 w-4" data-id="3">
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                </Link>
                            ) : (
                                link.label === 'Next &raquo;' ? (
                                    <Link
                                        key={link.label}
                                        href={`${link.url}&${new URLSearchParams(currentParams).toString()}`}
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                        color="gray" data-id="7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="lucide lucide-chevron-right h-4 w-4" data-id="8">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </Link>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={`${link.url}&${new URLSearchParams(currentParams).toString()}`}
                                        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ${link.active ? "text-blue-500 font-bold" : ""}`}
                                        color="blue" data-id="4">{link.label}
                                    </Link>
                                )
                            )
                        ) : (
                            link.label === '&laquo; Previous' ? (
                                <button
                                    key={link.label}
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                    color="gray" data-id="2" disabled>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none"
                                         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-chevron-left h-4 w-4" data-id="3">
                                        <path d="m15 18-6-6 6-6"></path>
                                    </svg>
                                </button>
                            ) : (
                                link.label === 'Next &raquo;' ? (
                                    <button
                                        key={link.label}
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                        color="gray" data-id="7" disabled>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none"
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                             strokeLinejoin="round"
                                             className="lucide lucide-chevron-right h-4 w-4" data-id="8">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </button>
                                ) : (
                                    <span
                                        key={link.label}
                                        dangerouslySetInnerHTML={{__html: link.label}}
                                        className="p-1 mx-1 text-slate-300"
                                    ></span>
                                )
                            )
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default Pagination;
