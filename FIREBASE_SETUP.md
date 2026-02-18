# How to Fix "auth/api-key-not-valid"

The error `auth/api-key-not-valid` happens because the application does not have a valid Firebase API Key.
You currently have this in your `.env` file:
```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
```
"YOUR_API_KEY" is a placeholder. Firebase rejects it.

## Solution

You must replace the placeholders in `.env` with **your actual Firebase project keys**.

### Step 1: Go to Firebase Console
1.  Open [Firebase Console](https://console.firebase.google.com/).
2.  Click on your project (or "Add project" if you don't have one).

### Step 2: Get Config
1.  On the **Project Overview** page, click the **Settings icon** (⚙️) > **Project settings**.
2.  Scroll down to the "Your apps" section.
3.  If no app is listed, click the **</>** icon (Web) to register your app.
4.  Copy the `firebaseConfig` object values. It looks like this:
    ```javascript
    const firebaseConfig = {
      apiKey: "AIzaSy...",
      authDomain: "your-project.firebaseapp.com",
      projectId: "your-project",
      ...
    };
    ```

### Step 3: Update .env
1.  Open the file `.env` in this project.
2.  Paste the values next to the corresponding keys.

**Example of a CORRECT `.env` file:**
```env
VITE_FIREBASE_API_KEY=AIzaSyD... (your actual key)
VITE_FIREBASE_AUTH_DOMAIN=meeting-intel.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=meeting-intel
VITE_FIREBASE_STORAGE_BUCKET=meeting-intel.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

### Step 4: Restart Server
After saving `.env`, you **MUST** restart the server for changes to take effect:
1.  Stop the server (Ctrl+C).
2.  Run `npm run dev` again.
