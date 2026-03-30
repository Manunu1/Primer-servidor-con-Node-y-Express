# 🖥️ Primer servidor con Node.js y Express

Este proyecto es un servidor básico desarrollado con **Node.js** y **Express** que permite obtener la hora actual en distintos formatos mediante rutas HTTP.

---

## 🚀 Funcionalidades

El servidor cuenta con las siguientes rutas:

* `/` → Mensaje de bienvenida
* `/hora` → Devuelve la hora actual en formato `HH:MM:SS`
* `/fechaCompleta` → Devuelve la fecha y hora completa en formato local (`es-AR`)
* Rutas inexistentes → Devuelven un error 404 en formato JSON

---

## 🛠️ Tecnologías utilizadas

* Node.js
* Express
* JavaScript (ES Modules)

---

## 📁 Estructura del proyecto

```
.
├── app.js / index.js (servidor principal)
├── src
│   └── time.js (funciones de fecha y hora)
```

---

## ⚙️ Instalación y uso

1. Clonar el repositorio o descargar los archivos

2. Instalar dependencias:

```bash
npm install express
```

3. Ejecutar el servidor:

```bash
node app.js
```

4. Abrir en el navegador:

```
http://localhost:3000
```

---

## 📌 Ejemplos de uso

### 🔹 Ruta principal

```
GET /
→ "Bienvenido! Hola manunu"
```

### 🔹 Obtener hora

```
GET /hora
→ "14:35:12"
```

### 🔹 Obtener fecha completa

```
GET /fechaCompleta
→ "30/3/2026, 14:35:12"
```

### 🔹 Error 404

```
GET /ruta-inexistente
→ {
     "error": "Ruta no encontrada",
     "status": 404
   }
```

---

## 🧠 Funciones implementadas

### `getDate()`

Devuelve la hora actual en formato:

```
HH:MM:SS
```

### `FechaCompleta()`

Devuelve la fecha y hora completa usando configuración regional argentina (`es-AR`).

---

## ⚠️ Notas

* El servidor corre en el puerto `3000`
* El manejo de errores 404 está implementado como middleware al final
* Se utiliza `toLocaleString` para formatear la fecha

---

## 📚 Objetivo del proyecto

Este proyecto fue desarrollado como práctica para:

* Comprender el funcionamiento de un servidor HTTP con Express
* Manejar rutas en Node.js
* Trabajar con fechas en JavaScript
* Implementar manejo de errores

---

## 👨‍💻 Autor

Proyecto realizado por **manunu** ✨
