// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form alert
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon 💖");
});