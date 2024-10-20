# Habit Tracker Frontend

## Overview

This is the frontend for the Habit Tracker application built using **React** and **Vite**. The application allows users to register, log in, manage habits, track progress, and earn rewards based on streaks. It integrates with the Habit Tracker backend and provides a responsive user interface to visualize user habits, progress, and rewards.

## Installation Guide

### 1. Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone https://github.com/mohdrehanrq0/PESU-task-frontend.git
```

### 2. Configure the API Base URL

Go to /src/lib/httpClient.ts and update the BASE_URL:

Uncomment line 3:

```const BASE_URL = "http://localhost:4000/api/v1/";```

Comment out line 4, which points to the deployed URL.

### 1. Install Dependencies and Start the Application

Navigate to the PESU-task-frontend folder in your terminal and run the following commands:

```bash

npm install
npm run dev
```

The application will be running at ```http://localhost:5173/```.

### Features

### Dashboard Page

**Habit List**: Displays a list of all user habits, where users can mark a habit as complete for the day.
**Habit Completion Graph**: A visual representation of the last 7 days of habit completion.
**Reward Points**: Displays the reward points earned based on completed habits and streaks.

### Habit Page

**Add Habit**: Users can create new habits, specifying details such as title, category, and frequency (daily or weekly).
**Edit Habit**: Allows users to modify existing habits.
**Delete Habit**: Users can delete habits they no longer wish to track.

### Progress Page

**Overall Progress**: Shows the user’s overall completion rate for their habits.
Reward Points and Badges: Displays the total reward points earned and badges for maintaining streaks.

### Technologies Used

React with Vite for fast and responsive frontend development.
Axios for making API requests to the backend.
React Router for page navigation.
Chart.js for visualizing habit completion in the form of graphs.
API Integration
All API endpoints for user authentication, habit management, and progress tracking are integrated:

**Authentication**: Users can register, log in, and log out.
**Habit Management**: Users can add, edit, delete, and mark habits as complete.
**Progress Tracking**: The app fetches and displays user progress, streaks, and rewards.
