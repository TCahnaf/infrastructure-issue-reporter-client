<h1>🏙️ Rapid City: Public Infrastructure Issue Reporting System</h1>



Rapid City is a high-performance digital platform designed to bridge the gap between citizens and municipal services. It empowers residents to report real-world infrastructure problems—like potholes, broken streetlights, or water leakages—while providing government staff and admins with a robust dashboard to manage, assign, and resolve these issues in real-time.


<img width="976" height="1496" alt="Screenshot 2025-12-30 at 10 07 03 PM" src="https://github.com/user-attachments/assets/8ad6f513-33ac-498f-a1bd-354b3da5ed2f" />








<h1>🚀 Live Links</h1>


Live Application: https://creative-blancmange-28c47a.netlify.app/

Client Repository: https://github.com/TCahnaf/infrastructure-issue-reporter-client

Server Repository: https://github.com/TCahnaf/infrastructure-issue-reporter-server



<h1>📌 Project Overview</h1>


The core objective of this system is to improve urban transparency and reduce response times for city maintenance. By centralizing reporting, the platform allows for efficient data collection and analysis of infrastructure health.

<h1>✨ Key Features</h1>

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

<h1>🛠 Tech Stack & Tools</h1>

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

<h1>📦 Major Dependencies</h1>

stripe: Secure payment processing for boosts and subscriptions.

tanstack/react-query: Efficient server-state management.

jspdf & jspdf-autotable: On-the-fly PDF invoice generation.

recharts: Interactive data charts for dashboards.

sweetalert2 & react-toastify: Elegant user notifications for all CRUD actions.

swiper: Smooth banner/slider transitions on the homepage.

<h1>🛠️ Installation & Local Setup</h1>

Clone the repository:

git clone https://github.com/TCahnaf/infrastructure-issue-reporter-client.git

<h1>🗺️ How It Works</h1>

Report: Citizen submits an issue with a photo.

Assign: Admin reviews the "Pending" list and assigns it to a verified Staff member.

Resolve: Staff updates the status to "Working" then "Resolved" as they fix the problem.

Verify: The timeline is updated automatically, and the citizen is notified.

Built with ❤️ for a better, more efficient city.

