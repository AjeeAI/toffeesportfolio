# 🎨 Toffee's Developer Portfolio

**Toffee's Portfolio** is a modern, highly interactive personal developer portfolio built to showcase creative engineering, professional experience, and selected works. Engineered with the latest Next.js App Router architecture and TypeScript, the platform prioritizes fluid user experiences, custom animations, and clean modular design.

## ✨ Key Features

* **Interactive UI/UX:** Features advanced interaction patterns including a custom `ProjectCursor` that enhances the visual experience when browsing the portfolio's selected works.
* **Scrollspy Navigation:** Implements a custom `useScrollspy` React hook to dynamically update the active state of the navigation menu based on the user's scroll position, providing a seamless Single Page Application (SPA) feel.
* **Modular Content Sections:** Neatly categorizes the developer's profile into reusable components: `Hero`, `About`, `Experience`, `SelectedWorks`, and `Testimonials`.
* **Centralized Animation Logic:** Manages complex UI transitions and entrance animations through a dedicated `lib/animations.ts` file to keep component code clean and maintainable.
* **Backend Integration:** Integrated with Firebase (`lib/firebase.ts`) to handle dynamic data storage or secure contact form submissions directly from the client.

## 🏗️ System Architecture

* **Framework:** Utilizes Next.js with the modern `app/` directory routing system (`layout.tsx`, `page.tsx`) for optimal server-side rendering (SSR) and static site generation (SSG).
* **Language:** Strictly typed with TypeScript (`tsconfig.json`) to ensure code reliability and predictable component prop passing.
* **Global Styling:** Managed via `globals.css` and PostCSS, likely wrapping a utility-first CSS framework like Tailwind CSS for rapid, responsive UI development.

## 🛠️ Tech Stack

* **Frontend Framework:** Next.js (React)
* **Language:** TypeScript
* **Backend/BaaS:** Firebase
* **Styling Tools:** PostCSS
* **Code Quality:** ESLint (`eslint.config.mjs`)

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* npm, yarn, or pnpm

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/toffeesportfolio.git](https://github.com/yourusername/toffeesportfolio.git)
    cd toffeesportfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:** Create a `.env.local` file at the root to include necessary Firebase configuration keys if required by `lib/firebase.ts`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will launch on `http://localhost:3000`.

---
## 👨‍💻 About the Project
This repository highlights a strong command of modern React ecosystems, combining visually compelling frontend architectures (Next.js, custom hooks, centralized animations) with secure, cloud-based data handling via Firebase.
