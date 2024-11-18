# prueba-tecnica-staff-boom
Prueba tecnica para Staff Boom, Laravel MySQL


Proyecto: Sistema de Gestión de Tareas
Desarrolla un sistema de gestión de tareas en el que los usuarios puedan crear, ver,
actualizar y eliminar tareas. Debes utilizar Laravel como framework backend y MySQL
como base de datos.
## Desarrollo Backend (60% del tiempo total):
El objetivo es evaluar la capacidad del candidato para diseñar y desarrollar una
aplicación backend utilizando Laravel y MySQL.

### Requerimientos:
1. Autenticación de Usuarios:
   -  Implemente un sistema de autenticación con roles de &quot;administrador&quot; y
   &quot;usuario&quot;. ✅
   - Asegúrese de que solo los administradores puedan realizar ciertas
   operaciones sensibles. ✅

2. Gestión de Tareas:
   - Los usuarios deben poder crear, editar, marcar como completadas y
   eliminar tareas. ✅
   - Implemente un filtro para mostrar solo las tareas completadas o no
   completadas.✅
   - Implemente paginación para la visualización de tareas.✅
   - Realice validaciones adecuadas en los formularios. ✅
   - Los campos de las tareas deben incluir: título, descripción, y fecha de
   vencimiento. ✅
   - Implemente un sistema de búsqueda de tareas por título o descripción.✅
   - Proporcione API endpoints para todas las operaciones CRUD de tareas.✅
   - Defina relaciones de base de datos adecuadas entre usuarios y tareas. ✅
   - Use middlewares de autenticación y autorización para proteger las rutas. ✅

## Desarrollo Frontend (40% del tiempo total):
El objetivo es evaluar la capacidad del candidato para crear una interfaz de usuario
eficiente utilizando el framework o librería de frontend que prefiera.
### Requerimientos:
- Desarrolle una interfaz amigable y responsive para interactuar con el sistema
de gestión de tareas.✅
- Muestre la lista de tareas con opciones para editar, marcar como completadas
y eliminar.✅
- Cree un formulario para agregar y editar tareas.✅
- Implemente filtros visuales para mostrar tareas completadas y no completadas.✅
- Diseñe una barra de búsqueda para buscar tareas por título o descripción.✅
- Utilice estilos y diseño atractivos para mejorar la experiencia del usuario.✅
- Use AJAX o tecnologías similares para mejorar la interacción en tiempo real
cuando sea necesario.✅
### Evaluación:
- Calidad del Código: Limpieza, organización y uso de buenas prácticas de
programación.
- Arquitectura y Estructura del Proyecto: Modularidad, escalabilidad y claridad
de la arquitectura.
- Implementación de Buenas Prácticas: Seguridad, validaciones, y manejo de
errores.
- Eficiencia y Experiencia de Usuario: Rendimiento y usabilidad de la interfaz.
- Documentación: Instrucciones claras para ejecutar la aplicación localmente y la
descarga desde un repositorio.


## Instalación

- git clone https://github.com/freddymorilloreyes/prueba-tecnica-staff-boom.git
- cd prueba-tecnica-staff-boom
- crea un archivo .env a partir de .env.example
- configura las siguientes variaibles con valores de conexion a MySQL 
    - DB_CONNECTION=mysql
    - DB_HOST=127.0.0.1
    - DB_PORT=3306
    - DB_DATABASE=prueba_tecnica_staff_boom
    - DB_USERNAME=tu_usuario
    - DB_PASSWORD=tu_clave
- composer install
- php artisan key:generate
- npm install && npm run build
- php artisan migrate (si no haz creado la base de datos te preguntará si quieres crearla, "Dile que si")
- php artisan db:seed
- composer run dev

### Visita http://localhost:8000/


