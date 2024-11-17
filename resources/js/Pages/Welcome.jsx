import {Head, Link} from '@inertiajs/react';

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome"/>
            <div className="bg-gray-50 text-black/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div
                    className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <img
                                    id="background"
                                    className="absolute -left-20 top-0 max-w-[877px]"
                                    src="https://www.staffboom.com/wp-content/themes/staffboom-theme/images/staffboom.png"
                                />
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <div
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black">
                                            Prueba técnica para Staff Boom
                                        </h2>

                                        <p className="mt-4 text-m/relaxed">
                                            En esta prueba encontrarás un listado administrable de tareas, las cuales puedes crear, editar, completar o eliminar
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black">
                                            Usuarios y tareas
                                        </h2>


                                        <p className="mt-4 text-m/relaxed">
                                            si ya ejecutaste php artisan db:seed, ¡LISTO! Entonces cuentas con varios usuarios y tareas creadas para el uso de la plataforma de gestión de tareas
                                        </p>
                                        <p className="mt-4 text-m/relaxed">
                                            Si no lo has ejecutado, entonces hazlo para tener los usuarios necesarios para la revisión
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black">
                                            Admin
                                        </h2>

                                        <p className="mt-4 text-m/relaxed">
                                            Tengo un usuario "admin" con las siguientes credenciales
                                        </p>
                                        <p className="mt-4 text-m/relaxed">
                                            Email: admin@staffboom.com
                                        </p>
                                        <p className="mt-4 text-m/relaxed">
                                            Pass: admin
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black">
                                            User
                                        </h2>

                                        <p className="mt-4 text-m/relaxed">
                                            Tengo un usuario "user" con las siguientes credenciales
                                        </p>
                                        <p className="mt-4 text-m/relaxed">
                                            Email: user@staffboom.com
                                        </p>
                                        <p className="mt-4 text-m/relaxed">
                                            Pass: user
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <footer className="py-16 text-center text-sm text-black">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
