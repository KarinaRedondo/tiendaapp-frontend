# UNIVERSIDAD DE CARTAGENA
## INGENIERÍA DE SOFTWARE - ANÁLISIS Y DISEÑO DE SOFTWARE
### TRABAJO COLABORATIVO CONTEXTUALIZADO

## Sistema de Comercio Local

## Descripción

El sistema es una plataforma de comercio local desarrollada con **Spring Boot** en el backend y **TypeScript con SWC** en el frontend, basada en una arquitectura de microservicios para garantizar escalabilidad y mantenimiento.  

Facilita la interacción entre clientes, tenderos y domiciliarios mediante un sistema seguro que emplea **Spring Security** y autenticación **JWT** en el backend, mientras que en el frontend optimiza el rendimiento con **Vite y SWC**.  

La plataforma permite gestionar usuarios, tiendas, vehículos, pedidos, calificaciones, ganancias y ventas, mejorando.

## Tecnologias
- React
- TypeScript + SWC

## Requisitos
-   Node
-   Java 17

## Cómo empezar
1. Clona este repositorio git@github.com:KarinaRedondo/tiendaapp-frontend.git
2. Configura la conexión con el backend en el archivo index.ts dentro de la carpeta api. 
3. Ejecuta la aplicación.


# Dependencias del proyecto

## 1. Dependencies (Producción)  
Estas son las librerías necesarias para el funcionamiento del frontend.  

- **`axios`** → Cliente HTTP para hacer solicitudes a APIs de manera sencilla.  
- **`react`** → Biblioteca principal para construir interfaces de usuario.  
- **`react-dom`** → Complemento de React para renderizar componentes en el DOM.  
- **`react-feather`** → Conjunto de iconos minimalistas para React.  
- **`react-router-dom`** → Manejador de rutas para crear navegación en la aplicación.  
- **`sweetalert2`** → Librería para mostrar alertas y notificaciones personalizadas.  


## 2. DevDependencies (Desarrollo)  
Estas herramientas ayudan en el desarrollo del proyecto, pero no son necesarias en producción.  

- **`@types/react`** y **`@types/react-dom`** → Definiciones de TypeScript para React y ReactDOM.  
- **`@typescript-eslint/eslint-plugin`** y **`@typescript-eslint/parser`** → Configuración de ESLint para TypeScript.  
- **`@vitejs/plugin-react-swc`** → Plugin para mejorar el rendimiento de React con Vite y SWC.  
- **`eslint`** → Herramienta para mantener código limpio y evitar errores comunes.  
- **`eslint-plugin-react-hooks`** → Reglas específicas de ESLint para los hooks de React.  
- **`eslint-plugin-react-refresh`** → Plugin para recargar automáticamente React en desarrollo.  
- **`typescript`** → Lenguaje que extiende JavaScript con tipado estático.  
- **`vite`** → Herramienta rápida para construir proyectos con React.


# Principios de Diseño y Flujo de Trabajo en el Frontend  

En este proyecto, hemos utilizado uno de los principios SOLID, específicamente el **Principio de Responsabilidad Única (SRP)**. Este principio establece que cada módulo o clase debe tener una única responsabilidad, es decir, debe encargarse de una sola tarea. Esto se traduce en un código más limpio, mantenible y fácil de entender.  

Para lograrlo, dividimos el proyecto en varias capas, asegurando que cada una tenga un propósito claro e independiente:  

- **`api/`**: Contiene la configuración y funciones para la comunicación con el backend a través de solicitudes HTTP. Aquí se manejan las llamadas a la API utilizando `axios`.  
- **`models/`**: Define las estructuras de datos utilizadas en la aplicación, como interfaces y tipos en TypeScript para representar entidades del sistema.  
- **`components/`**: Incluye los componentes reutilizables de la interfaz de usuario, como botones, formularios y tarjetas.  
- **`services/`**: Contiene la lógica de negocio relacionada con el manejo de datos, como funciones que interactúan con la API o procesan información antes de enviarla a los componentes.  
- **`views/`**: Define las páginas principales de la aplicación, que agrupan componentes y presentan la interfaz al usuario.  


 # Arquitectura por Capas  

El sistema de Comercio Local sigue una **arquitectura por capas**, lo que permite organizar el código de manera estructurada y modular. Cada capa tiene una función específica y se comunica con las demás de manera controlada, lo que facilita la **escalabilidad, el mantenimiento y la reutilización del código**.  

### Estructura del Proyecto  

- **`api/`**: Gestiona la comunicación con el backend, enviando y recibiendo datos a través de peticiones HTTP. Aquí se centralizan las llamadas a la API para evitar redundancias en el código.  
- **`models/`**: Define la estructura de los datos utilizados en la aplicación. Incluye interfaces y tipos de TypeScript para garantizar consistencia y validación en los datos manejados.  
- **`components/`**: Contiene los elementos reutilizables de la interfaz gráfica, como botones, cuadros de diálogo y tarjetas. Estos componentes aseguran coherencia visual y funcional en la aplicación.  
- **`services/`**: Se encarga de la lógica de negocio y la manipulación de datos antes de enviarlos a los componentes o a la API. Aquí se implementan funciones auxiliares que optimizan el rendimiento del sistema.  
- **`views/`**: Agrupa las pantallas y páginas principales de la aplicación, organizando la presentación de la información y manejando la navegación entre secciones.  

Gracias a esta arquitectura, el sistema es más fácil de escalar y mantener, permitiendo el desarrollo ágil y ordenado del proyecto.  


### Beneficios: 
- **Separación de Responsabilidades**: Cada capa tiene una función específica, lo que facilita la comprensión y el mantenimiento del código. 
- **Escalabilidad**: La arquitectura por capas permite agregar nuevas funcionalidades de manera modular sin afectar otras partes del sistema. 
- **Reutilización del Código**: Los componentes están diseñados para ser independientes y pueden ser reutilizados en diferentes partes de la aplicación o en proyectos futuros. 
- **Facilita el Testing**: Las capas separadas permiten una mejor organización de las pruebas unitarias y de integración, lo que facilita la identificación y corrección de errores. Esta arquitectura proporciona una base sólida para el desarrollo del sistema de gestión de eventos, promoviendo la robustez, la flexibilidad y la mantenibilidad del código.
 



