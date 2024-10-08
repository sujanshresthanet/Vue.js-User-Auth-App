  Vue.js Authentication App - README

Vue.js Authentication App with Bootstrap 5
==========================================

This is a simple Vue.js application that implements user authentication features, including login, registration, forgot password, profile, and dashboard pages. The project uses Vue Router for navigation, Bootstrap 5 for UI components, and local storage to manage user data.

Features
--------

*   **User Login**: Users can log in with their credentials (email and password).
*   **Registration**: Users can register with their email and password.
*   **Forgot Password**: Simulates a password reset by sending a reset link.
*   **Dashboard**: Displays a dashboard page for logged-in users.
*   **UserProfile**: Shows the user's email (retrieved from local storage) and allows updating email and password.

Setup Instructions
------------------

### Prerequisites

*   Node.js installed (version 14.x or later)
*   npm or Yarn package manager

### Installation

To get started, clone the repository and install the dependencies:

    
    git clone https://github.com/sujanshresthanet/User-Auth-App.git
    cd User-Auth-App
    npm install
    

### Project Structure

*   `src/router/index.js`: Vue Router configuration for navigation.
*   `src/main.js`: Main entry point for the Vue app.
*   `public/index.html`: Base HTML file, includes Bootstrap 5.

### Project Setup
Make sure you have Vue CLI installed. If you haven’t set up a Vue.js project yet, you can do it using the following commands:

    
    npm install -g @vue/cli
    vue user-auth-app
    cd user-auth-app
    


### Directory Structure
Here’s the basic structure of the Vue.js application:

    user-auth-app/
    ├── src/
    │   ├── assets/
    │   ├── views/
    │   │   ├── UserDashboard.vue
    │   │   ├── UserForgotPassword.vue
    │   │   ├── UserProfile.vue
    │   │   ├── UserRegister.vue
    │   │   └── UserLogin.vue
    │   ├── App.vue
    │   ├── main.js
    │   └── router/
    │       └── index.js
    ├── public/
    │   └── index.html
    └── package.json

### Running the Application

To run the application in development mode, use the following command:

    
    npm run serve
    

The app will be running at `http://localhost:8080`. Open this URL in your browser to see the application.

### Build for Production

To build the project for production:

    
    npm run build
    

This will create a production-ready build in the `dist` directory.

Authentication Logic
--------------------

### Login

The login page checks the entered email and password against the data stored in the browser's **localStorage**. If the user is authenticated, a static token is stored in localStorage and the user is redirected to the dashboard.

### Registration

The registration page saves the user data (email and password) to localStorage. On successful registration, the user can log in using these credentials.

### UserProfile

The profile page allows users to update their email and password. The updated data is saved to localStorage.

Project Components
------------------

*   **UserLogin.vue**: Login form with email and password fields, redirects to the dashboard on success.
*   **Register.vue**: Registration form to create new user credentials, saves to localStorage.
*   **ForgotPassword.vue**: Simple forgot password form, simulates a reset link sent.
*   **Dashboard.vue**: Displays a welcome message with the user's email and navigation options.
*   **UserProfile.vue**: Allows users to view and update their email and password.

Using Bootstrap 5
-----------------

The application uses Bootstrap 5 for the overall layout and design of the forms and components. Make sure that Bootstrap 5 is correctly included in the `index.html` file, as shown below:

    
    
    
    

Contributing
------------

If you'd like to contribute, feel free to fork the repository and submit pull requests.

License
-------

This project is licensed under the MIT License.