# Ejercicios Básicos de TypeScript

Este repositorio contiene ejercicios básicos de **TypeScript** para aprender y comprender el funcionamiento de los datos tipados en comparación con JavaScript.

## 📋 Descripción

El proyecto está organizado en diferentes carpetas, cada una enfocada en un aspecto específico de TypeScript:

- **`inicio/`** - Tipos de datos básicos y arrays
- **`Clases/`** - Programación orientada a objetos con TypeScript
- **`Decoradores/`** - Uso de decoradores en TypeScript
- **`FuncionesFlecha/`** - Funciones arrow y su tipado
- **`Generics/`** - Tipos genéricos y su aplicación
- **`Interfaces/`** - Definición y uso de interfaces
- **`Modulos/`** - Sistema de módulos con TypeScript y Webpack

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 14 o superior)
- pnpm (recomendado) o npm

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/DanielGodoyDAW/TypeScript.git
   cd TypeScript
   ```

2. **Instalar dependencias (solo para la carpeta Modulos):**
   
   La carpeta `Modulos/` requiere dependencias para trabajar con Webpack y empaquetado de módulos:
   
   ```bash
   cd Modulos
   pnpm install
   ```
   
   O si usas npm:
   ```bash
   cd Modulos
   npm install
   ```

3. **Compilar TypeScript a JavaScript:**
   
   En cada carpeta con archivos `.ts`, puedes compilar usando:
   ```bash
   tsc
   ```

4. **Visualizar en el navegador:**
   
   Abre los archivos `index.html` en tu navegador para ver los resultados en la consola.

## 📁 Estructura del Proyecto

```
TypeScript/
├── inicio/              # Tipos de datos básicos
│   ├── tipodatos.ts
│   ├── arrays.ts
│   └── index.html
├── Clases/              # POO en TypeScript
│   ├── clases.ts
│   └── index.html
├── Decoradores/         # Decoradores
│   ├── decoradores.ts
│   └── index.html
├── FuncionesFlecha/     # Arrow functions
│   ├── funcionesFlecha.ts
│   └── index.html
├── Generics/            # Tipos genéricos
│   ├── generics.ts
│   └── index.html
├── Interfaces/          # Interfaces
│   ├── interfaces.ts
│   └── index.html
├── Modulos/             # Módulos con Webpack
│   ├── modules.ts
│   ├── persona.ts
│   ├── package.json
│   ├── webpack.config.js
│   └── index.html
└── README.md
```

## 🎯 Objetivos de Aprendizaje

- Comprender las diferencias entre JavaScript y TypeScript
- Aprender el sistema de tipado estático
- Practicar con tipos básicos, interfaces y genéricos
- Entender la programación orientada a objetos en TypeScript
- Trabajar con módulos y herramientas de empaquetado (Webpack)

## 🔧 Tecnologías Utilizadas

- **TypeScript** - Lenguaje de programación tipado
- **pnpm** - Gestor de paquetes rápido y eficiente
- **Webpack** - Empaquetador de módulos (en carpeta Modulos)
- **ts-loader** - Loader de TypeScript para Webpack

## 📝 Notas Importantes

- Los archivos `.js` y `.d.ts` son generados automáticamente al compilar TypeScript y **no se incluyen en el repositorio**.
- La carpeta `node_modules/` tampoco se sube al repositorio. Debes instalar las dependencias localmente.
- Cada carpeta tiene su propio `tsconfig.json` con la configuración de TypeScript.

## 🤝 Contribuciones

Este es un proyecto educativo personal. Si encuentras algún error o tienes sugerencias, siéntete libre de abrir un issue.

## 👤 Autor

**Daniel Godoy**
- GitHub: [@DanielGodoyDAW](https://github.com/DanielGodoyDAW)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

⭐ Si este proyecto te ha sido útil para aprender TypeScript, ¡no olvides darle una estrella!
