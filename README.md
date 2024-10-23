# Cognizant_Tasks

**\*\***Todo List Application\*\*\*\*

Overview
The Todo List Application is a simple, full-stack web application that allows users to manage their tasks efficiently. Users can add, view, edit, complete, and delete tasks. This project is built using React for the frontend and Node.js with Express for the backend.

Features
Add Tasks: Users can input new tasks and save them to the list.
View Tasks: The application displays all tasks with their status (completed or not).
Edit Tasks: Users can modify existing tasks.
Complete Tasks: Users can mark tasks as completed by clicking on them.
Delete Tasks: Users can remove tasks from the list.

Technologies Used
Frontend: React.js
Backend: Node.js, Express
CSS: Custom styles for a clean and responsive design

Getting Started
To run this application locally, follow the steps below:

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
npm (Node Package Manager)

## Installation

1.Clone the Repository
git clone -----
cd

2.Set Up the Backend
Navigate to the backend directory and install the required dependencies:

cd todo-backend
npm install

Initialize a new Node.js project and install dependencies :
npm init -y
npm install express cors mongoose

3 .Start the Backend Server
npm start

The server will run on http://localhost:3000.

---

4. Set Up the Frontend
   Open a new terminal, navigate to the frontend directory, and install the dependencies:

cd todo-app

5. Start the Frontend Application
   npm start.

Usage ----->
Adding a Task: Enter your task in the input field and click the "Add" button.

Completing a Task: Click on a task to mark it as completed. Completed tasks will be crossed out.

Editing a Task:Click the "Edit" button next to the task you want to edit, modify the text, and click "Save".

Deleting a Task: Click the "Delete" button to remove a task from the list.

Code Structure
frontend/: Contains the React application files.
backend/: Contains the Node.js server files, including API routes.
