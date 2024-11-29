# Node API

Este es el API para la aplicación JavySorts, que permite gestionar listas de productos y sus detalles.

## Requisitos

- Node.js (versión 16 o superior)
- MongoDB (base de datos)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jeremias-alc/nodeAPI-javysorts/new/main?filename=README.md
   cd Node_API
Instala las dependencias:
npm install   
Configura tu base de datos MongoDB. Puedes usar una base de datos local o un servicio de MongoDB en la nube.

Crea un archivo .env en la raíz del proyecto y agrega la siguiente línea:
MONGODB_URI=<TU_URI_DE_MONGODB>
Inicia el servidor:
npm start o npm run dev en mi caso
El API estará disponible en http://localhost:3000.
Endpoints
GET /lists - Obtener todas las listas.

POST /lists - Crear una nueva lista.

PUT /lists/:id - Actualizar una lista existente.

DELETE /lists/:id - Eliminar una lista.

GET /products - Obtener todos los productos.

POST /products - Crear un nuevo producto.

PUT /products/:id - Actualizar un producto existente.

DELETE /products/:id - Eliminar un producto

Notas
Asegúrate de que tu base de datos MongoDB esté en funcionamiento antes de iniciar el servidor.
Puedes usar herramientas como Postman para probar los endpoints del API.
Contribuciones


Licencia
Este proyecto está bajo la Licencia MIT.


### Documentación para el Frontend (JavySorts)

```markdown
# JavySorts

JavySorts es una aplicación web para gestionar listas de productos de supermercado.

## Requisitos

- Navegador web moderno (Chrome, Firefox, etc.)
- Conexión a Internet

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL_DEL_REPOSITORIO_FRONTEND>
   cd JavySorts
Abre el archivo index.html en tu navegador.
Uso
Crea una nueva lista ingresando un nombre en el campo correspondiente y haciendo clic en "Crear".
Agrega productos a la lista utilizando el campo de búsqueda.
Puedes marcar los productos como completados y ver el progreso de la lista.
Imprime la lista en formato PDF haciendo clic en el ícono de imprimir.
Estructura del Proyecto
index.html - Página principal de la aplicación.
FuntionFP.js - Lógica de funciones para la gestión de listas y productos.
FuntionFrontE.js - Funciones para la interacción del usuario y la UI.
FormsStyle.css - Estilos para los formularios.
StyleFP.css - Estilos generales de la aplicación.
Notas
La aplicación se conecta a un API backend para gestionar listas y productos.
Asegúrate de que el API esté en funcionamiento antes de usar la aplicación.
Contribuciones
Si deseas contribuir, por favor abre un issue o un pull request.

Licencia
Este proyecto está bajo la Licencia MIT.


### Notas Finales

Recuerda reemplazar `<URL_DEL_REPOSITORIO_API>` y `<URL_DEL_REPOSITORIO_FRONTEND>` con las URLs reales de tus repositorios. Además, puedes añadir más detalles específicos según sea necesario.}
