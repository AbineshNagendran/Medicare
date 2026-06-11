# Medsteps Landing Page Rebuild

A high-performance, modern, and fully responsive medical services landing page built using **React.js (Functional Components)** and **Tailwind CSS v4**.

This codebase is specifically designed to be clean, modular, and easy to explain — perfect for junior/fresher developers preparing for technical interviews.

---

## 🚀 Quick Start

### 1. Installation
Clone the repository, navigate into the project directory, and install dependencies:
```bash
npm install
```

### 2. Run Locally (Development)
Start the Vite development server with hot module reloading (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 3. Build for Production
Bundle the project into optimized static assets for hosting (saved in the `dist` folder):
```bash
npm run build
```

---

## 📁 Project Folder Structure

```
Medsteps/
├── public/                  # Static assets served directly (favicon, global icons)
├── src/
│   ├── assets/              # Premium images generated for the project
│   │   ├── doctor-hero.png  # Hero section doctor illustration
│   │   ├── doctor-mika.png  # Consultant doctor profile 1
│   │   ├── doctor-nguyen.png# Consultant doctor profile 2
│   │   ├── doctor-flores.png# Consultant doctor profile 3
│   │   ├── 3d-molecule.png  # Lavender molecule decorative asset
│   │   └── map-mockup.png   # Custom map illustration
│   │
│   ├── components/          # Reusable UI Section Components
│   │   ├── Navbar.jsx       # Responsive header navigation & theme toggles
│   │   ├── Hero.jsx         # Hero section copy, reviews, and floating badges
│   │   ├── Partners.jsx     # Trust symbols / Brand partner grid
│   │   ├── Features.jsx     # Bento-style benefits & interactive mockups
│   │   ├── Consultants.jsx  # Online doctor card mappers
│   │   ├── AdditionalFeatures.jsx # Physical map, clinic hours & benefits checklist
│   │   ├── CtaBanner.jsx    # Purple gradient banner inviting bookings
│   │   └── Footer.jsx       # Multi-column footer, newsletter subscribe, and store badges
│   │
│   ├── App.jsx              # Main router/wrapper; orchestrates theme state & section order
│   ├── index.css            # Tailwind directives, Google Font, and custom styling
│   └── main.jsx             # React DOM entry mount point
├── vite.config.js           # Vite config with @tailwindcss/vite plugin
└── package.json             # Core dependency details and npm script commands
```

---

## 💡 Fresher Concept Walkthrough (Q&A Guide)

Use these questions and answers to understand how the project works under the hood and explain it clearly in code reviews or interviews:

### Q1: How is the Light/Dark mode state managed and applied?
**Answer:** 
We handle theme swapping at the root level using React's **State** and **Effect** hooks inside [App.jsx](file:///c:/Users/Asus/OneDrive/Desktop/aevevo%20tech/aevevo_landing_page/Medsteps/src/App.jsx):
1. A state variable `darkMode` (boolean) is created: `const [darkMode, setDarkMode] = useState(false)`.
2. A `useEffect` watches the `darkMode` state. Whenever it changes, we grab the root element (`document.documentElement`) and either `.add('dark')` or `.remove('dark')`.
3. Tailwind detects the `'dark'` class on the root HTML tag. Any element configured with a `dark:bg-slate-950` prefix will automatically switch styles.

### Q2: What is a Bento Grid, and how is it implemented?
**Answer:** 
A **Bento Grid** is a modern web design layout pattern where features are presented in rounded, tiled grids of varying sizes (similar to a Japanese bento lunchbox). 
In [Features.jsx](file:///c:/Users/Asus/OneDrive/Desktop/aevevo%20tech/aevevo_landing_page/Medsteps/src/components/Features.jsx), we build this using Tailwind's **CSS Grid** classes:
- The parent container uses `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- The "Dashboard & Booking" card spans two columns on medium screens and up using the `md:col-span-2` utility.
- Other cards occupy a single cell (`col-span-1` by default), creating an asymmetrical, premium, and balanced layout.

### Q3: How is responsive design handled across Mobile, Tablet, and Desktop?
**Answer:** 
We use Tailwind CSS's **mobile-first media queries**:
- **Mobile (Default):** Tailwind classes without prefixes apply to mobile layouts (e.g. `grid-cols-1`).
- **Tablet (Medium - `md:`):** Applies styles at `768px` wide screens (e.g. `md:grid-cols-2` and `md:flex-row`).
- **Desktop (Large - `lg:`):** Applies styles at `1024px` wide screens and up (e.g. `lg:grid-cols-3`).
- For navigation, the [Navbar.jsx](file:///c:/Users/Asus/OneDrive/Desktop/aevevo%20tech/aevevo_landing_page/Medsteps/src/components/Navbar.jsx) has a stateful drawer. Clicking the menu icon toggles `isOpen`, revealing the mobile navigation options as a clean vertical dropdown.

### Q4: Why are we using inline SVGs for brand social media logos instead of Lucide React?
**Answer:** 
Lucide Icons deprecated and removed brand-specific logos (such as Facebook, Twitter, and LinkedIn) in recent major versions to prevent trademark confusion and reduce bundle sizes. 
To handle this cleanly:
- We write inline `<svg>` blocks inside [Footer.jsx](file:///c:/Users/Asus/OneDrive/Desktop/aevevo%20tech/aevevo_landing_page/Medsteps/src/components/Footer.jsx).
- We set `fill-current` so that they automatically adapt to hover text colors, keeping the code simple, customizable, and dependency-free.
