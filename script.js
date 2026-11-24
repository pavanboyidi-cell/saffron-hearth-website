// Saffron & Hearth - Interactive Website Script

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const menuBtn = document.getElementById("hamburgerBtn");
  const navList = document.getElementById("navList");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Menu Category Filter Buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  const categories = document.querySelectorAll(".menu-category");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-category");
      categories.forEach((cat) => {
        if (selectedCategory === "all" || cat.getAttribute("data-category") === selectedCategory) {
          cat.style.display = "block";
        } else {
          cat.style.display = "none";
        }
      });
    });
  });

  // 3. Claim Offer Buttons Pre-fill Reservation Notes
  const offerButtons = document.querySelectorAll(".claim-offer-btn");
  const notesInput = document.getElementById("notes");

  offerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const offerName = btn.getAttribute("data-offer");
      if (notesInput && offerName) {
        notesInput.value = `Offer selected: ${offerName}`;
      }
    });
  });

  // 4. Table Reservation Form Handling
  const bookingForm = document.getElementById("bookingForm");
  const formStatus = document.getElementById("formStatus");

  if (bookingForm && formStatus) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const guestName = document.getElementById("name").value.trim();
      const guestDate = document.getElementById("date").value;
      const partySize = document.getElementById("guests").value;

      formStatus.textContent = `Thank you, ${guestName}! Your table request for ${partySize} on ${guestDate} has been recorded.`;
      formStatus.classList.add("visible");
      bookingForm.reset();
    });
  }
});
