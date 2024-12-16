# Movie Ticket App

## Overview

This project is a simple movie ticket application built with HTML, CSS, and JavaScript. It allows users to:

1. View details of the first movie when the page loads (including poster, title, runtime, showtime, and available tickets).
2. Browse a list of movies displayed in a menu on the left side of the page.
3. Buy tickets for a selected movie, with the available ticket count updating in real-time.


## File Structure

- index.html: Contains the structure of the webpage.
- styles.css: Provides styling for the application.
- script.js: Handles the logic for fetching data, displaying movie details, and updating ticket availability.

## How It Works

### Features

#### View Movie Details
- When the page loads, the details of the first movie are displayed automatically.
- The app calculates the available tickets by subtracting `tickets_sold` from the theater's `capacity`.

#### Movie Menu
- A list of all movies is displayed in the sidebar.
- Clicking on a movie title updates the main section with that movie's details.

#### Buy Tickets
- Clicking the "Buy Ticket" button reduces the available tickets by 1.
- If no tickets are available, the button becomes disabled.

### API Endpoints

#### `GET /films/1`
- Returns details of the first movie.

#### GET /films
- Returns a list of all movies.
  
