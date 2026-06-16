# ATELIER - Premium Design & Build

A modern design and architecture portfolio built with TanStack Start, React, and Tailwind CSS.

## Features

- ⚡ Server-side rendering (SSR) with TanStack Start
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 📱 Fully responsive design
- ⚙️ Deployed on Vercel with Node.js runtime

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── routes/           # TanStack Router routes
│   │   ├── __root.tsx    # Root layout
│   │   └── index.tsx     # Home page
│   ├── lib/              # Utility functions
│   ├── hooks/            # React hooks
│   ├── components/       # Reusable components
│   ├── assets/           # Images and static files
│   ├── server.ts         # Server entry point
│   ├── start.ts          # TanStack Start middleware
│   ├── router.tsx        # Router configuration
│   └── styles.css        # Global styles
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── vercel.json           # Vercel deployment config
```

## Technologies

- **Framework**: TanStack Start (React 19)
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Routing**: TanStack Router
- **State Management**: React Query
- **Build Tool**: Vite
- **Deployment**: Vercel (Node.js)

## Deployment

This project is configured for deployment on Vercel. Simply push to GitHub and Vercel will automatically deploy.

See `vercel.json` for deployment configuration.

## License

MIT
