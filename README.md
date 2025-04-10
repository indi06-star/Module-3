# StreamX

## Project Setup Guide
Thank you for taking the time to review my work! Follow these steps to set up and run the project.
Please note, all the following commands can only be ran on git bash. Not cmd, not powershell but GIT BASH.

A fully functional Streaming website built by Anathi Mnotoza, Indiphile Mncegwa, Wade Brittz, Tiffany Johnson, for the Module3 assignment. StreamX offers a plethora of movies from different genres. You can browse through our movies and you can aslo book a movie which will then be added to your movies list.
---

## Technologies Used
- **Front-end:** Vue JS  
- **Styling:** Bootstrap, CSS
- **Back-end:** Node JS
- **Database:** MySQL
- **Other:** axios, bootstrap, core-js, vue, vue-router, vue3-cookies, vue3-datepicker, vue3-toastify, vuex, bcrypt, cors, dotenv, express, jsonwebtoken, mysql2

## Setup Instructions
Follow these steps to run the ReflectaHome website on your local development environment:

1.  **Prerequisites:**
    * NODE JS (version >= v20.18.0)
    * MySQL Server installed and running
    * Package Management System >>>>> NPM

## 1. Clone the Repository
You can either clone the repository using Git or download the ZIP file.

```sh
# Clone the repository
git clone https://github.com/indi06-star/Module-3.git 
```

Alternatively, download the ZIP file and extract it to your desired location.

---

## 2. Install Dependencies
Navigate into the project directory and install the required dependencies for both the backend and frontend.

```sh
# Navigate to the project directory
cd Module-3

# Install backend dependencies
npm i --prefix Backend/

# Install frontend dependencies
npm i --prefix Frontend/
```

---

## 3. Run the Express Server (Backend)
**Important:** Start the backend server before running the frontend.

```sh
npm run dev --prefix Backend/
```

This will start the Express server, allowing the frontend to communicate with it.

---

## 4. Run the Frontend
Once the backend is running, start the frontend.
Please open a NEW git bash window to run this command, I repeat please don't close the backend server to run this command leave it running on another window and run the following command 
in a new window pleaseeeeee🚨🚨🚨🚨🚨🚨

```sh
npm run serve --prefix Frontend/
```

This will launch the frontend in your browser.

---

## 5. Access the Application
Click on the link provided in the terminal after running the frontend.

## 6. Key Features
This Streaming website implements the following key features:

* **User Login and Registration:** Secure user registration and login functionality.
* **User Interface Design and UX/UI Principles:** A user-friendly and visually appealing design adhering to UX/UI best practices.
* **Product/Service Display and Catalog Implementation:** Clear and organized display of mirror products with detailed information and browsing capabilities.
* **Booking Process:** A functional Booking system allowing users to pick a start date and end date as well as adding their selected movies.
* **Responsive Design Implementation:** The website adapts seamlessly to various screen sizes (desktop, tablet, mobile).
* **Database Design and Implementation:** A well-structured database that is hosted on a one of the most trusted db hosting platforms: CleverCloud, to store users, products, and order data.
* **Authentication and User Management:** Secure authentication for users and potentially an administrative interface for managing the website.
* **Product/Service Data Management:** An administrative interface for adding, editing, and deleting products which is only accessable if you are an admin user.
* **Order Processing and Management:**An administrative interface for viewing and managing customer orders.
* **Overall System Integration (Front-end and Back-end):** Seamless communication and data flow between the user interface and the server-side logic.

## 7. Users Creds for logging in
Please use the following credentials for logging in
```sh
# to login in as a user:
username = john@gmail.com
password = user1234

# to login in as a admin:
username = stan@StreamX.com
password = admin1234
```
You can also create your own account and login with those credentials 

Enjoy exploring the project!

---

## Author
Tiffany Johnson
Anathi Mnotoza
Indiphile Mcengwa
Wade Brittz

### Thank you for reviewing my work! 😊