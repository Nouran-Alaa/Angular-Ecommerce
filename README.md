# 🛍️ Angular eCommerce Website

This is a simple yet complete **eCommerce web application** built with **Angular** and **Bootstrap** as part of the final task for the Angular module in the **9-month Web and User Interface scholarship program at the Information Technology Institute (ITI)**.

## 🚀 Project Overview

The project demonstrates a real-world use of core Angular concepts including routing, guards, authentication, form validation, directives, and responsive UI design. It simulates a basic shopping experience with protected routes and session-based user handling.

## ✨ Features

* 🔐 **Authentication System**

  * Login and Registration using Reactive Forms with validation
  * SessionStorage used for storing and validating user data
  * Navbar and footer hidden on login/register pages

* 🛡 **Route Guards**

  * Implemented `CanActivate` to protect routes
  * Unauthorized users are redirected to the login page

* 📋 **Form Handling & Validation**

  * Fully validated forms for login, registration, and product creation
  * User-friendly error messages

* 📦 **Products Page**

  * Add new products using a reactive form
  * Display products dynamically

* 🧭 **Routing & Navigation**

  * Handled routing using `router-outlet`
  * Redirects and 404 Not Found page for invalid routes

* ❌ **404 Page**

  * Custom Not Found component for invalid or broken URLs

* ✨ **Directives**

  * Used built-in directives like `*ngIf`, `*ngFor`
  * Created custom directives for UI enhancement

* 🌐 **Responsive Design**

  * Fully mobile-friendly layout
  * Burger menu for small screens
  * Hero section with carousel

* 🚪 **Logout Functionality**

  * Clears session and restores guard behavior
  * Redirects back to login

* 📁 **Clean Project Structure**

  * Organized folders for components, guards, services, directives
  * Scalable and easy to maintain

## 🛠️ Technologies Used

* Angular
* TypeScript
* Bootstrap
* HTML5 & CSS3

## 📦 How to Clone & Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/angular-ecommerce-app.git
   cd angular-ecommerce-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200/`

> 💡 Make sure you have Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

## 📚 What I Learned

This was my **first Angular project**, and I gained hands-on experience with:

* Angular fundamentals and project structure
* Working with TypeScript
* Form validation and route protection
* Creating reusable components and directives
* Designing responsive layouts and UI patterns

Thank you for checking out this project! I hope you enjoy exploring my project. <3 🌟
