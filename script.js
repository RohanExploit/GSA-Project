const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

if (form && note) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      note.textContent = "Please fill in all required fields before submitting.";
      return;
    }

    note.textContent = "Thank you! Your inquiry has been received.";
    form.reset();
  });
}
