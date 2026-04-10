# FOSSEE Workshop Booking - UI/UX Redesign

## Summer Fellowship 2026 Submission

### Project Workflow & Development Log

#### 1. Initial Setup & Analysis

I cloned the repository and analyzed the original repository structure.
Initialized the repository with React environment using Vite and Tailwind CSS.
All frontend dependencies were installed and pushed in the first commit.

#### 2. Technical Challenge

I tried to run the original Django 3.0.7 backend. Since we are using the latest version of Python 3.13, the server failed to start due to the removal of the old modules (distutils and cgi).
So, I decided to use the existing FOSSEE website at https://python-workshops.fossee.in/page/home for reference and start updating the frontend UI/UX as changing the legacy modules would have consumed a lot of time.

Date: 10-04-2026
Updated the frontend code and added frontend folder having loginview.jsx, navbar.jsx, app.jsx etc. Ran the project however the tailwind css is giving error. Hence the frontend is looking like a html project. Will update it in the next commit.

By using trial and error, the problem was identifies. Vite doesn't have a config file to process CSS through PostCSS and Tailwind. Fixed the issue. CSS is now properly visible and created few more files.
Kept the original design, just improved the UI/UX.

## What design principles guided your improvements?
The primary goal was to change the portal from a legacy, function-first Django interface into a modern, user-centric Single Page Application (SPA). The guiding principles were:

Visual Hierarchy and Clarity: We moved away from the cluttered, boxy layouts of the original site to a "Glassmorphism" aesthetic. This used backdrop-blur and soft slate-50 backgrounds to make the primary action areas, like the Login Portal, stand out.

Branding Consistency: We retained the core identity of the FOSSEE group at IIT Bombay. This involved using the specific "FOSSEE Blue" (#2563eb) for all primary buttons and links to maintain professional trust.

Data-Driven Storytelling: Instead of just listing features, we highlighted the project's impact—such as the 10,000+ Students Trained and 33 hours of material—using high-contrast banners to immediately communicate value to new visitors.

## How did you ensure responsiveness across devices?
To ensure the portal worked seamlessly from mobile phones to desktop monitors, we implemented the following:

Mobile-First Grid Systems: Using Tailwind CSS, we moved from static tables to responsive grids. For example, the Statistics dashboard uses a sidebar filter on desktop that collapses into a hidden drawer or top-stack on mobile.

Touch-Friendly Targets: In the redesigned Login view, buttons and input fields were given increased padding (py-4) and rounded corners (rounded-2xl) to ensure they are easy to interact with on touchscreens.

Fluid Navigation: The Navbar was rebuilt with a functional hamburger menu and a sticky backdrop-blur header, ensuring users always have access to "Home" and "Statistics" regardless of scroll depth.

## What trade-offs did you make between the design and performance?
Modernizing a legacy system always involves balancing "eye-candy" with speed:

State-Based Routing vs. Heavy Libraries: Instead of installing heavy routing libraries immediately, we used a lightweight React useState pattern for the initial SPA logic. This prevented "page freezes" and kept the initial bundle size small while providing a fast, flicker-free transition between views.

CSS-in-JS vs. Utility CSS: We chose Tailwind CSS over traditional styled-components. While Tailwind requires a bit more configuration initially, it allowed us to achieve the advanced "Glassmorphism" effects without the runtime performance overhead of heavy CSS-in-JS libraries.

Asset Optimization: We utilized the original classroom and workshop images but designed the layout to lazy-load content sections, ensuring the "Home" page remained snappy despite high-resolution visuals.

## What was the most challenging part of the task and how did you approach it?
The most significant challenge was the Configuration Sync and "UI Freeze" during the pivot from the legacy Django structure to the Vite/React environment.

The Issue: We encountered several PostCSS and syntax errors where the browser was rendering plain HTML because the Tailwind "engine" wasn't recognizing the new file paths.

The Approach: We took a "Deep Fix" approach. We audited the environment to ensure the postcss.config.js and tailwind.config.js were correctly aligned with ES Module syntax. We then implemented a self-doubting "Master Prompt" strategy to wipe out robotic, over-explained code and replace it with clean JSX. By systematically fixing the "plumbing" of the project, we unblocked the UI and allowed the professional styling to finally render.

## These are the setup instructions(Assuming Node.js is already installed)

1. Install Libraries
 This command will download all the necessary things mentioned in package.json
npm install

2. Start the Portal
This launches the Vite development server.
npm run dev

3. URL
 Click the link provided in the terminal (e.g., http://localhost:5183).

4. Interaction
 You can now navigate between Home, Workshop Statistics, and Login using the Navbar.

## Screenshots

1. Before improvement

![Home Page](<Screenshot 2026-04-11 005215.png>)
![Login Page](<Screenshot 2026-04-11 005228.png>)
![Workshop Statistics Page](<Screenshot 2026-04-11 005239.png>)

2. After improvement

![Home Page](<Screenshot 2026-04-11 003937.png>)
![Home Page](<Screenshot 2026-04-11 003952.png>)
![Home Page](<Screenshot 2026-04-11 004004.png>)
![Workshop Statistics Page](<Screenshot 2026-04-11 004016.png>)
![Workshop Statistics Page](<Screenshot 2026-04-11 004034.png>)
![Login Page](<Screenshot 2026-04-11 004043.png>)