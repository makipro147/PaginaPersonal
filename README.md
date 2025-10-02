# 🚀 Portfolio Website Design - (High-Performance Full-Stack Solution)

[![CI/CD Status](https://github.com/makipro147/PaginaPersonal/workflows/main/badge.svg)](https://github.com/makipro147/PaginaPersonal/actions)
---

## 1. Stack Tecnológico & Arquitectura (TDD/MVC)

Este proyecto está construido bajo un enfoque **Cloud-Native** y sigue el patrón **MVC en capas** con un estricto flujo de trabajo **TDD (Desarrollo Guiado por Pruebas)**.

| Componente | Tecnología | Rol Arquitectónico |
| :--- | :--- | :--- |
| Frontend (V/C) | **Next.js 14+** (App Router) & **TypeScript** | Vista (Presentación) y Controlador (Lógica de Interfaz). |
| Backend (C/M) | **Kotlin** (Ej. con Spring Boot) | Controlador (Lógica de Negocio) y Modelo (Acceso a Datos). |
| Base de Datos (M) | **PostgreSQL** (con ORM) | Modelo (Persistencia de Datos). |
| Interfaz UI | Radix UI, Lucide Icons, CVA | Componentes accesibles y escalables. |

---

## 2. Desarrollo Local (DevOps)

### Requisitos Previos

Asegúrate de tener instalado **Node.js (v18+)** y **npm** o **pnpm/yarn** (recomendado para eficiencia).

### Instalación de Dependencias

Ejecuta el comando para instalar todas las dependencias del proyecto, incluyendo los tipos de desarrollo:

```bash
# Se recomienda usar pnpm o yarn para una gestión de dependencias más eficiente.
npm install 
# O, si usas Yarn: yarn install