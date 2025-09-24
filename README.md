<h1 align="center">
   Comité De Estudiantes de Ing. Ciencias de la Computación - CICC
</h1>

<p align="center"> 
  <img width="300" height="300" alt="logo" src="https://github.com/user-attachments/assets/419486e8-1ebf-49f4-90d0-6edb9dcfe05b" />
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Astro-005090?style=for-the-badge&logo=astro&logoColor=white" />
  <img src="https://img.shields.io/badge/React-005090?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-005090?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/SWR-E0A000?style=for-the-badge&logo=swr&logoColor=white" />
  <img src="https://img.shields.io/badge/Biome-E0A000?style=for-the-badge&logo=biome&logoColor=white" />
  <img src="https://img.shields.io/badge/pnpm-E0A000?style=for-the-badge&logo=pnpm&logoColor=white" />
</div>

---

This is the official website for the CICC (Comité de Estudiantes de Ingeniería en Ciencias de la Computación) at the Pontificia Universidad Católica Madre y Maestra (PUCMM), Santiago campus. The site is built with Astro and React, providing information about the committee, its members, activities, and frequently asked questions.

![Homepage Screenshot](https://github.com/user-attachments/assets/033bf188-0c86-4281-9f19-c7fabcda67f7)

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/vladimircuriel/cicc-web)

## Features

*   **Dynamic Content**: Content is fetched from a WordPress backend using custom API endpoints, allowing for easy updates without changing the code.
*   **Astro + React**: Leverages Astro for a fast, static-first build and React for interactive UI components.
*   **Responsive Design**: A mobile-first design using Tailwind CSS ensures a great experience on all devices.
*   **Component-Based Architecture**: A clean and organized structure with reusable React components.
*   **Multiple Pages**:
    *   **Home**: An overview of the committee, featured activities, current directive members, and an FAQ section.
    *   **Activities**: A paginated list of past and upcoming events organized by the committee.
    *   **Managements (Gestiones)**: A historical view of past committee directives, browseable by year through an interactive timeline.

## Tech Stack

*   **Framework**: [Astro](https://astro.build/)
*   **UI Library**: [React](https://react.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Data Fetching**: [SWR](https://swr.vercel.app/)
*   **Code Quality**: [Biome](https://biomejs.dev/) for formatting and linting.
*   **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

*   Node.js (v18.20.8, v20.3.0, or newer)
*   pnpm

### 1. Clone the repository

```bash
git clone https://github.com/cicc-pucmm/cicc-web
cd cicc-web
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the following variables. These are required to fetch data from the backend API.

```env
PUBLIC_API_URL=your_api_url
PUBLIC_API_USERNAME=your_api_username
PUBLIC_API_PASSWORD=your_api_password
```

### 4. Run the development server

```bash
pnpm dev
```

The application will be available at `http://localhost:4321`.

### Other Scripts

*   **Build for production**: `pnpm build`
*   **Preview the production build**: `pnpm preview`
*   **Check and fix code style**: `pnpm biome`

## Project Structure

The project is organized with a separation between Astro's file-based routing and React's component-driven UI.

```
.
├── public/              # Static assets (images, fonts)
├── src/
│   ├── layouts/         # Astro layout components
│   ├── pages/           # Astro pages (routes)
│   ├── react/
│   │   ├── components/  # Reusable React components (cards, navigation, etc.)
│   │   ├── lib/         # DTOs, hooks, constants, and utilities
│   │   └── pages/       # Page-level React components imported by Astro
│   └── styles/          # Global styles and Tailwind CSS configuration
├── astro.config.mjs     # Astro configuration
└── package.json         # Project dependencies and scripts
```

## Deployment

This project is automatically deployed to a PUCMM server via FTP using a GitHub Actions workflow. The workflow is triggered on every push to the `main` branch.

The `.github/workflows/deploy.yml` file defines the following jobs:

1.  **Build**: Checks out the code, creates the `.env` file from repository secrets, builds the Astro site, and uploads the `dist` directory as an artifact.
2.  **Deploy**: Downloads the build artifact and uses the `FTP-Deploy-Action` to upload the files to the production server.
