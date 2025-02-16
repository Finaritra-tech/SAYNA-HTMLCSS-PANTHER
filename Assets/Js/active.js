document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const currentUrl = window.location.pathname;

  links.forEach((link) => {
    if (link.href.includes(currentUrl)) {
      link.classList.add("active");
    }
  });
});
