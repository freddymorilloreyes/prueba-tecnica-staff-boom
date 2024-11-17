import DetailsCard from "@/Pages/Task/DetailsCard.jsx";

export default function TaskList({tasks, isLoading}) {

    return (
        <div className="container mx-auto p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                        <>Loading...</>
                    ) :
                    (
                        tasks.map(task => (
                            <DetailsCard key={task.id} task={task}/>
                        ))
                    )}
            </div>
        </div>
    )
}
