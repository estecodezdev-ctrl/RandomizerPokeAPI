# PokeRandomizer
Este proyecto es una aplicación web que permite generar y visualizar información aleatoria de Pokémon. 
Conecta una interfaz desarrollada en ReactJs con un servidor propio construido en Node.js, demostrando el flujo completo de datos desde una API externa hasta el cliente

## Características:

* **Generación Aleatoria:** Obtiene datos dinámicos de la PokeAPI de forma asíncrona.
* **Arquitectura Cliente-Servidor:** Implementación de un backend en Node.js para gestionar la lógica de las peticiones.
* **Interfaz Reactiva:** Frontend desarrollado con React 
* **Estilos:** Uso de CSS para una presentación limpia y organizada.

## Tecnologías Utilizadas:

### **Frontend**
* **React.js (Vite):** Biblioteca principal 
* **Axios:** Cliente HTTP para realizar peticiones al backend.
* **CSS:** Estilos personalizados y diseño mediante *Flexbox*
### **Backend**
* **Node.js:** Entorno de ejecución de javascript para el servidor.
* **Express.js:** Framework para la creación del servidor y rutas.
* **Cors:** Manejo de seguridad para la conexión entre puertos (5173 -> 6969).


## Estructura del Proyecto

```text
POKEAPI-POKENAV/
├── backend/          # Servidor Node.js + Express
│   ├── index.js      - Servidor y rutas, archivo que contiene toda la logica detras del randomizador y busca la API
│   └── package.json  # Dependencias backend
│
│   
└── frontend/         # App React + Vite  
    ├──POKEAPI
          ├── src/          # Carpeta padre de los componetes de react para esta Aplicacion Web
                ├──Main.jsx   -archivo jsx base del proyecto (contiene todas las importaciones de los otros archivos como el app.jsx y el index.css)
                ├──App.jsx    -archivo jsx que contiene toda la logica de la Aplicacion Web, llama al servidor y crea las constantes y funciones para mostrar la data por medio de react 
                ├──App.css    -estilos de visualizacion del proyecto, tarjetas del Pokemon.
                ├──Index.css  -estilos de visualizacion de la aplicacion web general, color de fondo, color de las fuentes, fuentes y estilos de las fuentes. 
          └── package.json  # Dependencias frontend

```
## Como ejecutar el Proyecto
* *1. Iniciar el Servidor: Desde la terminal dentro de la carpeta backend (cd backend) iniciamos el archivo index con el comando node, puede ser node --watch index.js o sencillamente node -index.js
* *2. Iniciar el react: Desde la terminal vamos hasta la carpeta pokeApi (cd frontend -> cd pokeapi) una vez en esta carpeta incializamos el archivo usando npm run dev y listo :D. una vez los dos puertos esten activados usamos ctrl + click en el puerto que haya usado react para ver este resultado: <img width="1919" height="982" alt="image" src="https://github.com/user-attachments/assets/eb602d34-5906-4e01-85b2-4cbbfff5cae3" />

*al presionar el boton de Traer Pokemon el sevidor muestra algun pokemon random con los siguientes datos:
* *Peso
* *Id
* *Nombre
* *Tipos(En ingles)
* *Imagen
<img width="1919" height="990" alt="image" src="https://github.com/user-attachments/assets/498b0713-2cc3-4e98-873e-612c4c4a76d3" />


