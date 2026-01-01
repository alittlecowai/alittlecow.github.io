# Wedding Game - React Web App

A modern, responsive React web application for a wedding gallery and voting system built with Vite and React Router.

## Features

- 🔐 Hero-style login page
- 🎠 Image carousel with swipe and click navigation
- 📸 Featured gallery grid with voting/likes
- 🏆 Top 20 leaderboard with real-time voting
- 📤 Image upload with preview
- 💝 Heart voting system with in-memory state
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Built with Vite for fast development
- 🎨 Beautiful gradient UI with custom fonts

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Usage

### Pages

- **Login** - Hero-style login with phone number entry
- **Home** - Discover carousel + Featured gallery grid
- **Favorites** - Top 20 leaderboard sorted by likes
- **Upload** - Upload new images with preview
- **Menu** - Navigation menu
- **Profile** - User profile with logout

### Voting

Click the ❤️ heart button on any image to vote. Votes are tracked in-memory and the leaderboard updates in real-time.

### Navigation

Use the bottom navigation bar to switch between pages. Works seamlessly on mobile and desktop.

## Project Structure

```
src/
├── App.jsx                 # Root component with routing and state management
├── index.css               # Global styles with responsive design
├── main.jsx                # React entry point
├── pages/
│   ├── Login.jsx          # Login hero page
│   ├── Home.jsx           # Discover carousel + featured grid
│   ├── Favorites.jsx      # Leaderboard top 20
│   ├── Upload.jsx         # Upload wrapper page
│   ├── Menu.jsx           # Menu page
│   └── Profile.jsx        # User profile page
├── components/
│   ├── Carousel.jsx       # Reusable carousel component
│   ├── NavBar.jsx         # Bottom navigation bar
│   └── UploadForm.jsx     # Upload form with preview
index.html                  # HTML template
vite.config.js             # Vite configuration
package.json               # Project dependencies
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with responsive design
- **Google Fonts** - Poppins and Dancing Script fonts

---

Created for the wedding game project ✨
