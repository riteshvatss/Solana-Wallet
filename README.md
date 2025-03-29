🚀 Solana Wallet DApp

This decentralized application (dApp) allows users to interact with the Solana blockchain using their wallets. Users can check balances, send tokens, mint tokens, and even create new wallets locally. The project follows a Full-Stack architecture with a React frontend and a Node.js backend using Prisma ORM to connect to a PostgreSQL database.

📂 Project Structure

solana-wallet-dapp/
│-- frontend/  # React app for UI
│   │-- src/
│   │   │-- components/  # React components
│   │   │-- pages/  # Different UI pages
│   │   │-- utils/  # Helper functions
│   │   │-- App.js  # Main React component
│   │-- package.json  # Frontend dependencies
│-- backend/  # Node.js backend with Prisma & PostgreSQL
│   │-- src/
│   │   │-- routes/  # API routes
│   │   │-- db/  # Database configuration
│   │-- prisma/  # Prisma schema for PostgreSQL
│   │-- index.js  # Entry point for backend
│   │-- package.json  # Backend dependencies
│-- .env  # Environment variables
│-- README.md  # Project documentation

📌 Features

✅ Wallet Connection – Connects to Solana wallets like Phantom & Backpack.✅ Check Balance – View SOL and token balances.✅ Send SOL & Tokens – Transfer SOL or SPL tokens.✅ Mint Tokens – Mint new tokens directly from the dApp.✅ Create Wallet – Generate new wallets locally.✅ Database Integration – Store user transactions in PostgreSQL using Prisma ORM.

🔧 Prerequisites

Before running the project, ensure you have the following installed:

Node.js (LTS version recommended)

PostgreSQL

Solana CLI

📦 Install Solana CLI

sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

Then, verify the installation:

solana --version

📦 Install Dependencies

Navigate to the frontend and backend folders separately and install the required packages.

Frontend (React) Setup

cd frontend
npm install

Backend (Node.js & Prisma) Setup

cd backend
npm install

Set up the PostgreSQL database:

npx prisma migrate dev

🔥 Running the Project Locally

Start the backend first:

cd backend
npm run dev

Then, start the frontend:

cd frontend
npm start

Now, open http://localhost:3000/ in your browser to use the dApp! 🎉

📚 Solana Libraries Used

CLI Tools

solana-cli – Solana command-line interface

solana-keygen – Generates wallet keypairs

NPM Libraries

@solana/web3.js – Core Solana blockchain library

@solana/spl-token – For handling SPL tokens

@solana/wallet-adapter-react – Wallet connection for React

@prisma/client – ORM for database connectivity

express – Backend framework for API development
