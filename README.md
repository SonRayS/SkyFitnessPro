# SkyFitnessPro

## Link to the Project

[View the application on GitHub](https://github.com/SonRayS/JsKursWork.git)

## Development Information

SkyFitnessPro is a fitness application that offers users the ability to track progress in their fitness journey. It provides course management, video tutorials, and progress tracking, offering a responsive design for desktop and mobile resolutions (1440px and 375px). The app was developed using the Vite template and is powered by TypeScript, Tailwind CSS, and Google Firebase for user data and course management.

## Setup

To set up the application, run the following command:

``bash
npm install

## Project Design Documents
Program Specifications (Google Sheets)
Figma Design Mockups

## Technologies Used
Vite: Application bootstrapped using the Vite template.
TypeScript: Used for static typing and enhancing code quality.
Tailwind CSS: For styling, with custom configurations inside tailwind.config.js.
Google Firebase: Used for managing user data and course information.
React Router: For page routing within the application.
useContext: For managing global application state (user data, courses, and user courses).
useState: For handling local state in various components.
Jest: For testing functions and components.
Eslint and Prettier: For code formatting and linting.

## Pages
Home Page
Contains:

General header
Motivational text and slogan
Course cards
"Back to top" button
Course Page
Contains:

General header
Course name and image
3 general points of course info
Course directions
"Start your journey" block
Profile Page (Accessible only for logged-in users)
Contains:

User block with data
"My Courses" block showing courses and progress
Workout Page (Accessible only for logged-in users)
Contains:

Video player (YouTube)
Exercise progress block


## Functionality
Non-logged-in users: Have access only to the home and course pages. Dynamic elements requiring authentication are hidden.
Login Modal: Clicking "Login" opens the login modal with data verification and password recovery (currently a placeholder).
Registration Modal: Clicking "Register" opens the registration form with input validation and the ability to toggle between modals.
Logged-in users:
Display the user's name in the header (placeholder functionality, as adding names was not specified).
Clicking the name opens a modal showing the real user email, with options to log out or go to the profile page.
Course cards update dynamically based on the user's login state (add course button for logged-in users, alert for non-logged-in users).
In the profile, courses can be removed by clicking the minus button, which also updates the home page.
Password change functionality: Users can update their password by entering the old and new password, with validation for the old password.
Workout progress is tracked and displayed as a percentage, which is also reflected on the profile page.
