// script.js

document.addEventListener("DOMContentLoaded", () => {
    const filmsList = document.querySelector("#films");
    const poster = document.querySelector("#poster");
    const title = document.querySelector("#title");
    const runtime = document.querySelector("#runtime");
    const showtime = document.querySelector("#showtime");
    const availableTickets = document.querySelector("#available-tickets");
    const buyTicketButton = document.querySelector("#buy-ticket");
  
    // Fetch and display the menu of movies
    fetch("http://localhost:3000/films")
      .then((response) => response.json())
      .then((films) => {
        filmsList.innerHTML = ""; // Clear placeholder
  
        films.forEach((film) => {
          const li = document.createElement("li");
          li.textContent = film.title;
          li.className = "film item";
          li.dataset.id = film.id;
  
          li.addEventListener("click", () => {
            displayFilmDetails(film);
          });
  
          filmsList.appendChild(li);
        });
  
        // Display the first movie by default
        if (films.length > 0) {
          displayFilmDetails(films[0]);
        }
      });
  
    // Function to display movie details
    function displayFilmDetails(film) {
      poster.src = film.poster;
      title.textContent = film.title;
      runtime.textContent = film.runtime;
      showtime.textContent = film.showtime;
      const available = film.capacity - film.tickets_sold;
      availableTickets.textContent = available;
  
      buyTicketButton.disabled = available <= 0;
  
      buyTicketButton.onclick = () => {
        if (available > 0) {
          availableTickets.textContent = available - 1;
          film.tickets_sold += 1;
  
          if (film.capacity - film.tickets_sold <= 0) {
            buyTicketButton.disabled = true;
          }
        }
      };
    }
  });
  