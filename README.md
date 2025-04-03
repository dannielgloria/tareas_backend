# 📌 Tareas API - Microservicio REST con Node.js + MySQL

Este microservicio permite gestionar tareas a través de una API RESTful utilizando Node.js, Express y MySQL.

## 🧠 Características principales

- Conexión a base de datos MySQL
- API RESTful con endpoints CRUD para tareas
- Modularizado con controladores y rutas
- Manejo de errores básico
- Uso de variables de entorno con dotenv

## 🛠️ Requisitos previos

- Node.js (v16 o superior)
- npm
- Acceso a una base de datos MySQL

## 🚀 Cómo ejecutar el proyecto

```bash
git clone <repo>
cd tareas-api
npm install
cp .env.example .env
npm start
```

## 📡 Endpoints disponibles

| Método | Ruta             | Descripción                          |
|--------|------------------|--------------------------------------|
| GET    | `/tareas`        | Obtener todas las tareas             |
| POST   | `/tareas`        | Crear una nueva tarea                |
| PUT    | `/tareas/:id`    | Actualizar texto y/o estado          |
| DELETE | `/tareas/:id`    | Eliminar una tarea por su ID         |

### 📥 Ejemplo para `POST /tareas`

```json
{
  "tarea": "Estudiar Node.js"
}
```
### ✏️ Ejemplo para `PUT /tareas/1`

```json
{
  "tarea": "Leer documentación de Express",
  "terminado": true
}
```

## 📂 Estructura del proyecto

```
tareas-api/
├── controllers/
├── routes/
├── db/
├── .env.example
├── index.js
├── package.json
└── README.md
```
