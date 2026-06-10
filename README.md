<div align="center">

# Raúl Pérez Valiente

### Full Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RaulPValiente/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raulperezvaliente/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:raulperezvaliente95@gmail.com)

</div>

---

## About

A premium single-page portfolio built with a dark minimalist design inspired by Vercel and Linear. Designed to showcase projects, technical skills, and career journey in a clean, responsive, and accessible interface.

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, TailwindCSS |
| **Build** | Vite |
| **Language** | JavaScript (ES6+) |
| **Package Manager** | Bun |

---

## Features

- **Dark Minimalist UI** — Clean aesthetic with green accent color
- **Fully Responsive** — Optimized for mobile (320px), tablet (768px), and desktop (1440px)
- **SEO Optimized** — Semantic HTML, Open Graph, Twitter Cards, meta tags
- **Accessible** — ARIA labels, keyboard navigation, skip-to-content, color contrast
- **Smooth Animations** — Subtle transitions and scroll-based interactions
- **Dynamic Content** — All data loaded from separate data files
- **SVG Icon System** — Modular icon architecture for easy extensibility

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, role, status indicator, and call-to-action buttons |
| **Tech Stack** | Categorized skills grid (Frontend, Backend, AI, Other) |
| **Projects** | Project cards with descriptions, links, and technology badges |
| **Career Journey** | Vertical timeline with professional milestones |
| **Footer** | Social links and contact information |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+)
- [Bun](https://bun.sh/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/raulperezvaliente/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
bun install

# Start development server
bun run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Vite dev server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |

---

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   └── cv.pdf
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── icons/          # SVG tech icons
│   ├── components/
│   │   ├── CareerJourney/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── TechStack/
│   │   └── UI/
│   ├── data/
│   │   ├── career.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## Customization

1. **Personal Info** — Edit `src/data/*.js` files to update projects, skills, and career data
2. **Colors** — Modify accent color in `tailwind.config.js` and `src/index.css`
3. **CV** — Replace `public/assets/cv.pdf` with your own
4. **Icons** — Add SVG files to `src/assets/icons/` and reference them in `src/data/skills.js`

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with React + Tailwind CSS + Vite

</div>
