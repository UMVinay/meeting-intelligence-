# Meeting Intelligence & Action Item Generator

A modern React application for managing meetings, action items, and generating intelligence reports.

## Features
- **Authentication**: Email/Password and Google Sign-In via Firebase.
- **Dashboard**: Central hub for meetings and reports.
- **Meeting List**: View and manage recent meeting summaries.
- **AI Chat Widget**: Floating assistant for quick queries.
- **Responsive UI**: Optimized for all devices.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase
Open `src/firebase.js` and replace the placeholder config with your actual Firebase project configuration:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ... other config values
};
```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Folder Structure
- `src/components`: UI components (LoginCard, Sidebar, etc.)
- `src/contexts`: React Contexts (AuthContext)
- `src/pages`: Page layouts (Dashboard)
- `src/assets`: Static assets
