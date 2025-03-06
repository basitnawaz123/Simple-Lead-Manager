# Simple-Lead-Manager

A simple lead management system with a **Next.js frontend (app)** and a **Node.js backend (server)** using **MongoDB**.

## Setup Instructions

### Backend (server)
1. Navigate to the `server` folder:  
   ```bash
   cd server

2. Create a .env file and add the following:
   MONGO_URI=your_mongodb_connection_string
   PORT=5000 or default it will run on 3000

3. Install dependencies:
   ```bash
   npm install

4. Start the server:
   ```bash
   npm run dev

### Frontend (app)
1. Navigate to the `app` folder:  
   ```bash
   cd app

2. Create a .env file and add the following:
   NEXT_PUBLIC_API_URL=http://localhost:5000/api

3. Install dependencies:
   ```bash
   npm install

4. Start the app:
   ```bash
   npm run dev

Now, the app should be running at ``http://localhost:3000`` and the server at ``http://localhost:5000``
