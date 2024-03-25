OmegaReact: Contract Management App
OmegaReact is a React-based web application designed to streamline the management and viewing of contracts. Developed with a focus on simplicity and efficiency, this application serves as a robust platform for handling contract data, leveraging React Vite with TypeScript for a smooth development experience.

Features
Contract Display: The homepage displays a list of contracts fetched from an API, showing essential details such as the customer's name, contract number, delivery deadline, and contract status. Each status is color-coded for quick recognition: Created (Green), Ordered (Yellow), and Delivered (Grey).
Contract Filtering: Users can filter contracts based on the customer's name and contract activity. Active contracts include those in the "Created" or "Ordered" status, while inactive contracts are marked as "Delivered."
Contract Creation: The application allows for the creation of new contracts with a default status of "Created." All fields are required for new contract entries.
Contract Updates: Users can update the delivery deadline and status of existing contracts. Delivery deadlines can only be modified for active contracts, and status progression follows a set path: from "Created" to "Ordered," and then to "Delivered."
Contract Details: Clicking on a contract opens a detailed view page, showcasing contract information at the top (customer, contract number, down payment date, delivery deadline, status) and listing the items associated with that contract below.
API Integration: The app is designed to fetch contract and item data from APIs, with dummy data initially used for development purposes.

Getting Started
Prerequisites
Ensure you have Node.js installed on your system to handle dependencies and run the project.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/omegareact.git
cd omegareact

Install the dependencies:
bash
Copy code
npm install

Running the Development Server
To start the development server, run:

bash
Copy code
npm run dev

This command will launch the app in development mode. Open http://localhost:3000 to view it in your browser.

Building for Production
To create a production build, run:

bash
Copy code
npm run build

This command compiles TypeScript files and then builds the React application for production, outputting the build to the dist directory.

Deployment
The dist directory contains the build artifacts that can be served by any static content server. For preview purposes, you can run:

bash
Copy code
npm run preview
This serves the production build on a local server for testing.

Notes for Production Readiness
Backend Setup: The application currently uses dummy data for development. A backend service should be implemented to handle real data fetching and management.
Security: Ensure all data communications are encrypted and secure. Implement authentication and authorization mechanisms.
Testing: Comprehensive unit and integration tests should be written and passed to ensure stability.
Performance Optimization: Monitor and optimize app performance, especially during data fetching and rendering.

Technologies Used
React 18.2.0
TypeScript 5.2.2
Vite 5.1.6
React Router Dom 6.22.3
ESLint for code quality assurance
