const toggler = document.querySelector(".toggler");
const form = document.querySelector(".user-registration");

toggler.addEventListener("click", function (e) {
  form.classList.toggle("active");
});
