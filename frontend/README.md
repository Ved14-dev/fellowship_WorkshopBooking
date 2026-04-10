# FOSSEE Workshops — Frontend Shell

This small frontend contains the React shell for the FOSSEE Workshops modernization effort. It includes a sticky `Navbar` and a redesigned `LoginView` built with Tailwind CSS.

Quick start

1. From `frontend/` install deps:

```bash
cd frontend
npm install
```

2. Initialize Tailwind (only if you want to customize):

```bash
npx tailwindcss init -p
```

3. Run dev server:

```bash
npm run dev
```

Notes
- The UI uses Tailwind CSS. Ensure `index.css` is imported by the app (already wired in `src/index.jsx`).
- Icons use `lucide-react`.
- To integrate production build into Django, build (`npm run build`) and copy `dist/` static output into your Django static pipeline (or serve separately).
