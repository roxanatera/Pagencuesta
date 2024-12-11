## **Proyecto Encuesta de Navidad **##

Este proyecto es una aplicación web interactiva que permite a los usuarios responder una encuesta relacionada con la Navidad, visualizar las respuestas en gráficos y tablas, y analizar las interacciones de los usuarios utilizando herramientas como Google Analytics.

Tecnologías Utilizadas

Frontend

React: Biblioteca principal para construir la interfaz de usuario.

TypeScript: Superset de JavaScript para proporcionar tipado estático y mejorar la mantenibilidad del código.

Tailwind CSS: Framework de CSS para diseñar rápidamente una interfaz atractiva y responsiva.

React Router DOM: Manejo de rutas y navegación en la aplicación.

React Chart.js 2: Biblioteca para crear gráficos interactivos.

Backend / Datos

No se utiliza backend; los datos se almacenan localmente en el estado de React.

Herramientas y Analítica

Google Analytics: Integrado para rastrear eventos como envíos de formularios y analizar el comportamiento de los usuarios.

Funcionalidades Implementadas

1. Encuesta Interactiva

Formulario: Los usuarios pueden completar un formulario donde ingresan su nombre, edad y su preferencia sobre la Navidad:

Las comidas y cenas especiales.

Las reuniones con la familia y amigos.

La decoración y el ambiente navideño.

Validación: Validación básica para asegurarse de que todos los campos estén completos antes de enviar el formulario.

2. Visualización de Datos

Gráfico de Pastel: Muestra la distribución de preferencias utilizando React Chart.js 2.

Tabla de Datos: Lista de las respuestas individuales de los usuarios para revisión detallada.

3. Diseño y Estilo

Responsividad: Diseño completamente adaptado a dispositivos móviles, tablets y pantallas de escritorio utilizando Tailwind CSS.

Sticky Footer: El pie de página siempre permanece al final de la página, incluso con contenido limitado.

4. Páginas

Página Principal (HomePage):

Contiene el formulario, el gráfico, y la tabla de datos.

Página de Política de Privacidad (PrivacyPage):

Información detallada sobre cómo se manejan los datos de los usuarios y su privacidad.

5. Integración de Google Analytics

Eventos: Se registra un evento en Google Analytics cada vez que un usuario envía el formulario.

Datos Anonimizados: Configuración de gtag para anonimizar las IPs de los usuarios.

Estructura del Proyecto

src/
├── components/
│   ├── SurveyForm.tsx        // Formulario de encuesta
│   ├── ChartComponent.tsx    // Gráfico de pastel
│   ├── TableComponent.tsx    // Tabla de respuestas
│   ├── Navbar.tsx            // Barra de navegación
│   └── Footer.tsx            // Pie de página
├── pages/
│   ├── HomePage.tsx          // Página principal
│   └── PrivacyPage.tsx       // Página de política de privacidad
├── App.tsx                   // Configuración principal de rutas
└── index.tsx                 // Punto de entrada principal

Cómo Ejecutar el Proyecto

Prerrequisitos

Tener instalado Node.js y npm.

Clonar el repositorio.

Instalar las dependencias:

npm install

Iniciar el Servidor de Desarrollo

npm run dev

Abrir http://localhost:5173 en el navegador para ver la aplicación en acción.

Posibilidades de Análisis

El proyecto proporciona las siguientes oportunidades de análisis y desarrollo:

Análisis de Datos: Los datos recopilados pueden ser exportados o utilizados directamente para análisis estadísticos.

Expansión con Backend: Agregar un servidor backend para almacenar las respuestas en una base de datos.

Integración con BI: Exportar los datos a herramientas como Google Looker Studio para informes avanzados.

Mejoras Visuales: Explorar más gráficos (barras, líneas) para visualizar diferentes aspectos de las respuestas.

Optimización UX: Monitorear el comportamiento del usuario para mejorar la experiencia de la encuesta.

Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor realiza un fork y envía tus cambios a través de un pull request.

Licencia

Este proyecto está licenciado bajo la MIT License.

