# IT Asset Management Application

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)  
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

## About the Project
The IT Asset Management Application is designed to streamline the process of managing IT assets within an organization. It allows administrators to manage assets and users, and employees to view their assigned assets and update their profiles.

## Features

### Admin
- **Manage Assets**: Add, edit, delete, and view assets.
- **Manage Users**: Create, edit, delete, and view users.
- **Assign Assets**: Assign assets to users and manage assignments.

### Employee
- **View Assigned Assets**: Employees can view the assets assigned to them.
- **Profile Management**: Employees can view and update their profile information.

## Prerequisites
- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)
- **MongoDB** (version 4.x or later)

## Installation

### Clone the Repository

git clone [your-repo-url]
cd it-asset-management

### Install Dependencies
   npm install
### Setup Environment Variables
Create a .env file in the root directory and add your MongoDB URI.
MONGODB_URI=mongodb:your database
### Run the Application

## Project Structure
/src
  /components
    - AdminDashboard.jsx
    - AssetTracking.jsx
    - EditAsset.jsx
  /layouts
    - AuthLayout.jsx
    - MainLayout.jsx
  /pages
    - Admin.jsx
    - Asset.jsx
    - AssignedAssetPage.jsx
    - EditUserPage.jsx
    - Employee.jsx
    - HomePage.jsx
    - LoginPage.jsx
    - SignupPage.jsx
    - UserManagementPage.jsx
    - AddNewAssetPage.jsx
    - AddAssetFormPage.jsx
    - NewUser.jsx
  - App.jsx
  - index.js
  - reportWebVitals.js
  - setupTests.js
/public
  - index.html
  - favicon.ico
  - manifest.json


## API Endpoints
### Authentication
- POST /api/auth/signup: Sign up a new user.
- POST /api/auth/login: Log in an existing user.
 ###Assets
- GET /api/assets: Retrieve all assets.
- POST /api/assets: Create a new asset.
- PUT /api/assets/:id: Update an existing asset.
- DELETE /api/assets/:id: Delete an asset.
### Users
- GET /api/users: Retrieve all users.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update an existing user.
- DELETE /api/users/:id: Delete a user.
### Assignments
- GET /api/assignments: Retrieve all asset assignments.
- POST /api/assignments: Create a new assignment.
- PUT /api/assignments/:id: Update an existing assignment.
- DELETE /api/assignments/:id: Delete an assignment.
- 
## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.

- 
## Contact

Email- neethu.ceecs24@duk.ac.in

Project Link:  https://github.com/Neethu-Muthu/MERN-IT_ASSET_MANAGEMENT-APP.git


This `README.md` includes all necessary details about the project, including setup, usage, project structure, API endpoints, and contribution guidelines.

