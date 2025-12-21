🏙️ Rapid City: Public Infrastructure Issue Reporting System

Rapid City is a high-performance digital platform designed to bridge the gap between citizens and municipal services. It empowers residents to report real-world infrastructure problems—like potholes, broken streetlights, or water leakages—while providing government staff and admins with a robust dashboard to manage, assign, and resolve these issues in real-time.

🚀 Live Links & Credentials

Live Application: https://creative-blancmange-28c47a.netlify.app/

Client Repository: https://github.com/TCahnaf/infrastructure-issue-reporter-client

Server Repository: https://github.com/TCahnaf/infrastructure-issue-reporter-server




📌 Project Overview

The core objective of this system is to improve urban transparency and reduce response times for city maintenance. By centralizing reporting, the platform allows for efficient data collection and analysis of infrastructure health.

✨ Key Features

Role-Based Access Control: Secure, specialized dashboards for Admins, Staff, and Citizens.

Interactive Issue Reporting: Citizens can submit reports with titles, detailed descriptions, categories, and image uploads.

Real-Time Issue Tracking: A read-only Timeline/Stepper UI tracks every action from "Pending" to "Closed" for full audit transparency.

Priority Boosting (Stripe Integration): Citizens can pay a fee (100tk) to "Boost" an issue, moving it to the top of the queue for faster attention.

Smart Assignment System: Admins can view available staff and assign issues with a single click; assigned staff get instant dashboard notifications.

Comprehensive Data Visualization: Integration with Recharts to display total reports, pending vs. resolved issues, and payment analytics.

Advanced Server-Side Searching: Robust filtering on the "All Issues" page by category, status, priority, and location.

Premium Subscription Model: Users can upgrade to a "Premium" tier for 1000tk to report unlimited issues beyond the standard limit of 3.

Automated Invoice Generation: Downloadable PDF invoices for payments using jsPDF for both admins and users.

Responsive Design: A fully fluid UI built with Tailwind CSS and DaisyUI, ensuring a seamless experience from iPhone XR to 4K desktops.

🛠 Tech Stack & Tools

Frontend

Framework: React 19 (Vite)

Styling: Tailwind CSS 4, DaisyUI 5

Data Fetching: TanStack Query (React Query) — used for all data synchronization, caching, and background loading.

Animations: Framer Motion & React-simple-typewriter

Navigation: React Router 7

Backend & Security

Server: Node.js, Express.js

Database: MongoDB

Authentication: Firebase Auth (Email/Password & Google)

Security: Axios Interceptors for JWT token verification and Role-Based Middleware.

📦 Major Dependencies

stripe: Secure payment processing for boosts and subscriptions.

tanstack/react-query: Efficient server-state management.

jspdf & jspdf-autotable: On-the-fly PDF invoice generation.

recharts: Interactive data charts for dashboards.

sweetalert2 & react-toastify: Elegant user notifications for all CRUD actions.

swiper: Smooth banner/slider transitions on the homepage.

🛠️ Installation & Local Setup

Clone the repository:

Bash

git clone https://github.com/TCahnaf/Utility-Bill-Management-System-Client.git
Install dependencies:

Bash

npm install
Configure Environment Variables: Create a .env file in the root and add your Firebase and MongoDB credentials:

Code snippet

VITE_FIREBASE_API_KEY=your_key
VITE_API_URL=http://localhost:3000
Run the development server:

Bash

npm run dev
🗺️ How It Works

Report: Citizen submits an issue with a photo.

Assign: Admin reviews the "Pending" list and assigns it to a verified Staff member.

Resolve: Staff updates the status to "Working" then "Resolved" as they fix the problem.

Verify: The timeline is updated automatically, and the citizen is notified.

Built with ❤️ for a better, more efficient city.

Would you like me to help you refine the "Extra 2 sections" descriptions for your Home Page?