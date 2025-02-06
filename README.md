# Task Manager

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

##Task Management App

This is a simple Task Management application built using Next.js, MongoDB, and Tailwind CSS. The app allows users to create, update, and delete tasks while keeping track of their task details including title, description, and due date.

Features
----------
Create tasks with title, description, and due date.
Mark tasks as complete/incomplete.
Delete tasks.
Display a list of tasks.

Prerequisites
-------------
Make sure you have the following installed on your system:
Node.js (v14 or higher)
MongoDB
Git 
Vercel CLI 

Setup Instructions
--------------------
Clone the repository:
git clone <your-repo-url>
cd <project-directory>

Install dependencies:
npm install

Configure environment variables:
Create a .env.local file in the root directory and add the following:
MONGODB_URI=<your-mongodb-connection-uri>
Replace <your-mongodb-connection-uri> with your MongoDB connection string.

Run the development server:
npm run dev
The app will be available at http://localhost:3000.

Deployment Instructions
-----------------------
To deploy on Vercel:
Push your code to GitHub.
Go to Vercel and import the project from your Git repository.
Add the environment variable under Vercel project settings.
Deploy the app.
