import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, Link} from "@inertiajs/react";
import Pagination from "@/Components/Pagination.jsx";
import {useState} from "react";
import Filters from "@/Pages/Task/Filters.jsx";
import List from "@/Pages/Task/List.jsx";

const Index = ({users}) => {
    console.log(users)

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Users
                    </h2>
                </div>
            }
        >
            <Head title="Task List"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tasks
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {users.data.map((user)=>(
                                <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {user.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.tasks.length}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/*<Filters setIsLoading={setIsLoading}/>*/}
                    {/*<div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">*/}
                    {/*    <List tasks={tasks.data} isLoading={isLoading}/>*/}
                    {/*</div>*/}
                    {/*<div className="py-12 px-4">*/}
                        <Pagination links={users.links}/>
                    {/*</div>*/}
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index
