
# Proyecto React con Vite

Este es un proyecto básico de React creado con Vite y TypeScript. Utiliza Bootstrap para el estilo y React Router para el enrutamiento.

## Requisitos

- Node.js
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Para compilar el proyecto para producción:
   ```bash
   npm run build
   ```

## Configuración de Variables de Entorno

Asegúrate de configurar el archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=https://api-shorturl.tecnosoft.xyz/api/admin
```

## Estructura del Proyecto

```bash
src/
├── components/    # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── services/      # Lógica para las peticiones a la API
├── App.tsx        # Componente principal
└── main.tsx       # Punto de entrada
```

## Licencia

Este proyecto está bajo la licencia MIT.
