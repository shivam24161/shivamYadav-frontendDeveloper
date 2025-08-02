# 🛍️ React E-Commerce Frontend (Vite + Theme Switcher + FakeStoreAPI)

This is a modern and responsive e-commerce frontend built using **React**, **Vite**, and **TypeScript**. It features theme switching with persistence, skeleton loaders, animated transitions, and routes for Home, About, and Contact pages. Product data is fetched from [FakeStoreAPI](https://fakestoreapi.com/).

---

## ✨ Features

- 🎨 Theme switching (light / dark / colorful)
- 💾 Theme persistence using `localStorage`
- 🛍️ Product listing with real-time data from FakeStoreAPI
- 🧱 Skeleton loaders while fetching data
- 📄 Multi-page layout (Home, About, Contact)
- 📱 Responsive design using custom CSS (media queries)
- ⚡ Built with Vite for lightning-fast dev environment
- 🔐 Basic security practices followed
- 🌐 Routing via React Router
- 🎬 Smooth page animations

---

## 🧰 Tech Stack

- **React** (v18+)
- **TypeScript**
- **Vite**
- **React Router v6+**
- **Custom CSS**
- **FakeStoreAPI**

---

## 📁 Folder Structure
```bash
src/
│
├── assets/ # Images, icons, etc.
├── components/ # Reusable components (Header, ThemeDropdown, Skeleton etc.)
├── context/ # Theme context provider
├── pages/ # Home, About, Contact, ProductDetails
├── styles/ # Custom CSS files
├── App.tsx # Main app component
├── main.tsx # App entry with ThemeProvider & Router
└── vite-env.d.ts # TypeScript types


---

## 🚀 Getting Started

### 🔧 Setup Steps

1. **Clone the repo**

```bash
git clone https://github.com/shivam24161/shivamYadav-frontendDeveloper.git
cd shivamYadav-frontendDeveloper

npm install

npm run dev

App will be available at http://localhost:5173.


⚙️ Build for Production
npm run build

To preview the production build:

npm run preview


---


🌐 API Used
This app uses FakeStoreAPI to fetch product data:

GET https://fakestoreapi.com/products – fetch all products

🧠 Tech Stack
React

TypeScript

Vite

React Router v6+

Custom CSS

FakeStoreAPI

📦 Security Practices
Theme and state stored securely in localStorage

Sanitized API usage (no XSS-prone HTML rendering)

No secrets or sensitive data exposed in frontend

HTTPS ready build for deployment

