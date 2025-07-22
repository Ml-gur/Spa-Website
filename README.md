

---

````markdown
# 🌿 African Luxury Spa Website

Created immersive African luxury spa website with cultural heritage sections, treatment showcases, and expert team profiles
Implemented WhatsApp booking integration, M-Pesa payments, and AI-powered therapist matching system
Added comprehensive admin dashboard with KES revenue tracking and African ingredient inventory management

---

## 🧘‍♀️ Key Highlights

- 🧿 **Cultural Heritage Experience**: Highlighting traditional African wellness rituals and organic ingredients.
- 💆 **Therapist Matching**: AI-powered system that pairs clients with the best therapist based on needs.
- 💬 **WhatsApp Integration**: Instant booking through WhatsApp.
- 💳 **M-Pesa Payments**: Seamless mobile payment experience for Kenyan users.
- 📊 **Admin Dashboard**: Real-time KES revenue tracking, African ingredient inventory, and service analytics.

---

## ⚙️ Tech Stack

### Frontend

- **React 18** — Concurrent rendering and modern component lifecycle features
- **Vite** — Fast development server and build tool
- **Redux Toolkit** — Scalable and maintainable state management
- **Tailwind CSS** — Rapid styling with utility classes
- **React Router v6** — Smooth, declarative routing
- **Framer Motion** — Elegant and performant animations
- **React Hook Form** — Minimal and performant form validation

### Visualization & Testing

- **D3.js & Recharts** — Interactive data visualization in the admin dashboard
- **Jest + React Testing Library** — Unit and integration testing

---

## 📋 Prerequisites

Ensure you have the following installed:

- Node.js `v14.x` or later
- npm or yarn

---

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
````

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📁 Project Structure

```
luxury-spa-app/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI elements
│   ├── pages/          # Pages (Home, Booking, Admin, etc.)
│   ├── styles/         # TailwindCSS and global styles
│   ├── App.jsx         # Main app component
│   ├── Routes.jsx      # Route declarations
│   └── index.jsx       # Entry point
├── .env                # Environment variables
├── index.html          # HTML shell
├── tailwind.config.js  # Tailwind setup
├── vite.config.js      # Vite config
└── package.json        # Dependencies & scripts
```

---

## 🧭 Routing Example

Add routes inside `Routes.jsx`:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more as needed
  ]);

  return element;
};
```

---

## 🎨 Styling with Tailwind CSS

Tailwind config includes:

* `@tailwind/forms` — Better form elements
* `@tailwind/typography` — Rich text formatting
* `@tailwind/aspect-ratio` — Media ratio utilities
* `@tailwind/container-queries` — Responsive containers
* Fluid typography and animations

---

## 📱 Responsive Design

Built with a mobile-first approach using Tailwind's breakpoint utilities for adaptive layouts across devices.

---

## 📦 Deployment

To build the app for production:

```bash
npm run build
# or
yarn build
```

Deploy using platforms like **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 💬 Feedback & Contributions

Have suggestions or want to contribute? Feel free to open a pull request or issue!

---

## ©️ License

MIT License. All African design elements and heritage representations are used with cultural respect and community engagement.

```

