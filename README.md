# 📝 Notes Manager Web App

![Laravel](https://img.shields.io/badge/Laravel-10.x-red?logo=laravel)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![Vite](https://img.shields.io/badge/Vite-React-646CFF?logo=vite)
![Breeze](https://img.shields.io/badge/Auth-Breeze-lightgrey)

---

A modern web application for managing personal notes, built with:

-   ⚙️ **Laravel** (Backend API, Authentication via Breeze)
-   ⚛️ **React** (Frontend UI)
-   💨 **Tailwind CSS** (Styling)

## 🔐 Features by Role

### 👤 User

-   Create notes 🆕
-   Edit notes ✏️
-   Delete notes 🗑️

### 🛠️ Admin

-   Delete users ❌
-   Change user roles 🔁

---

## 🚀 Getting Started

### Prerequisites

-   PHP 8.1+
-   Composer
-   Node.js & npm
-   MySQL/PostgreSQL
-   Laravel CLI

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git https://github.com/IsuruHet/notes-manager.git
cd notes-manager
```

### 2. Backend Setup (Laravel)

```bash
composer install
cp .env.example .env
php artisan key:generate
```

> **Edit `.env` to set your database credentials.**

```bash
php artisan migrate --seed
php artisan serve
```

### 3. Frontend Setup (React + Vite + Tailwind via Breeze)

```bash
npm install
npm run dev
```

---

## 🗂️ Project Structure

-   `resources/js/` — React components & pages
-   `routes/web.php` — Web routes (Breeze)
-   `routes/api.php` — API routes for notes/users
-   `app/Http/Controllers/` — Backend logic
-   `database/migrations/` — DB schema
-   `app/Models/User.php` — Includes role logic

---

## 🧑‍💼 Roles & Permissions

| Role  | Permissions                     |
| ----- | ------------------------------- |
| User  | Create/Edit/Delete own notes    |
| Admin | Delete users, change user roles |

Role is stored in the `users.role` column (e.g., `'user'`, `'admin'`).

---

## 🧪 API Endpoints (Example)

-   `GET /api/notes` – List notes
-   `POST /api/notes` – Create note
-   `PUT /api/notes/{id}` – Update note
-   `DELETE /api/notes/{id}` – Delete note
-   `DELETE /api/users/{id}` – Admin: delete user
-   `PUT /api/users/{id}/role` – Admin: update role

---

## 📸 UI Features

-   Responsive design via Tailwind
-   Authentication via Breeze scaffolding
-   Clean dashboard for managing notes

---

## ✅ Future Improvements

-   Add search/filtering for notes
-   Implement soft deletes and recovery
-   Add tagging and categorization for notes

---

## 📄 License

MIT

---
