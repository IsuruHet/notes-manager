# 📝 Notes Manager Web App

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
