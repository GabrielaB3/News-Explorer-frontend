# Project: News Explorer (Frontend)

Welcome to my project! I built News Explorer because I wanted to solve a modern dilemma: the overwhelming flood of information. Instead of jumping between a dozen news sites, I created a central hub where you can find exactly what’s happening in the world and, save the stories that actually matter to you.

## How it works

The app connects to the NewsAPI to fetch live, global data based on any keyword you’re curious about—from "AI" to "Jupiter." It’s designed to be a clean, distraction-free environment for reading.

If you find a must read article, you can "bookmark" it. Since the full backend is currently in development, I implemented a simulated login and storage system (Stubbing). This means the app acts exactly like a finished product: it checks for a "fake" security token, handles a mock login flow, and manages your saved articles as if a real database were responding in real time.

### Technologies and techniques used

- React 19 (Hooks & Functional Components): The heart of the application. I used useEffect to synchronize the news search with the API and useState to manage complex UI states, like switching between the "Results" view and the "Preloader" spinner.

- Vite: Its lightning-fast HMR (Hot Module Replacement) and optimized build process.

- Advanced Routing (HashRouter): To ensure a seamless experience on GitHub Pages, I implemented HashRouter. This prevents those annoying "404 errors" when a user refreshes their "Saved Articles" page, keeping the navigation stable.

- Mocking & Stubbing (Async/Await): I wrote a custom simulation layer for the backend. By using Promises and setTimeout, I recreated the "wait time" of a real server. This allowed me to polish the User Experience (UX) by testing how the app handles loading states and success messages before the real API was even ready.

- CSS3 & BEM Methodology: Styles are strictly organized using the BEM (Block Element Modifier) methodology. This was crucial for keeping the complex "News Card" component maintainable across mobile, tablet, and desktop views.

- Form Validation: I integrated the validator library to ensure that user inputs (like emails in the login modal) are legitimate, providing instant feedback and preventing "empty" searches.

- Automated Deployment: I configured a custom deployment pipeline using gh-pages and a specific base configuration in Vite to ensure all assets load perfectly on the web, regardless of the server's directory structure.

## Link to project on GitHub Pages

- [Link to the project](https://gabrielab3.github.io/News-Explorer-frontend/)

## Link to Frontend Project

- [Link to the project](https://github.com/GabrielaB3/News-Explorer-frontend.git)

## Project Pitch Video

- Check out [this video](https://drive.google.com/file/d/1Rw2anqnfHmVL3vhWMDEIVtp_UMXNe4-I/view?usp=sharing), where I describe my project and some challenges I faced while building
