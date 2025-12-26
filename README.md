# Sactus - Digital Agency Portfolio

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A modern, high-performance digital agency portfolio website built with React. Features a fully responsive design, physics-based animations, dark mode support, and a custom interactive cursor.

## 🚀 Live Demo

https://sactusagency.netlify.app/

## ✨ Key Features

* **🎨 Dark & Light Mode:** Seamless theme switching with persistent local storage state.
* **🖱️ Custom Cursor:** Interactive trailing cursor with inverted blending modes (`mix-blend-difference`).
* **✨ Smooth Animations:** Powered by **Framer Motion** for scroll-reveal, staggered lists, and hover effects.
* **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop using Tailwind CSS.
* **📧 Working Contact Form:** Integrated with **Web3Forms** for serverless email submissions.
* **🔔 Toast Notifications:** Real-time success/error feedback using `react-hot-toast`.
* **💎 Glassmorphism:** Modern UI elements with backdrop blur effects.

## 🛠️ Tech Stack

* **Framework:** [React](https://reactjs.org/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Motion for React (Framer Motion)](https://motion.dev/)
* **Icons/Assets:** Custom assets & SVG icons.
* **Form Handling:** [Web3Forms](https://web3forms.com/)
* **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

## 📂 Project Structure

```bash
src/
├── assets/          # Images and icons
├── components/      # Reusable React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── OurWork.jsx
│   ├── Teams.jsx
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   ├── Title.jsx
│   ├── ServiceCard.jsx
│   └── ThemeToggleBtn.jsx
├── App.jsx          # Main application layout & Cursor logic
├── main.jsx         # Entry point
└── index.css        # Tailwind directives & Global styles
