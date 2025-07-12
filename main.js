//  Toggle mobile nav menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) {
    nav.classList.toggle("active");
  }
}

// AOS animation setup
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }
});

// 🧠 Featured Project Rotator (on index.html only)
const projects = [
  {
    title: "BuzzBrain",
    description:
      "A dynamic quiz app with multiple categories, language support, and difficulty levels.",
    tech: "HTML, CSS, JavaScript",
    image: "images/language selection page.png",
    live: "https://buzzbrain.netlify.app",
    github: "https://github.com/yourusername/buzzbrain",
  },
  {
    title: "Saxlink Pro",
    description:
      "A vibrant responsive site for a school offering music and language training.",
    tech: "HTML, CSS, JavaScript",
    image: "images/Saxlink.png",
    live: "#",
    github: "#",
  },
  {
    title: "NGO Page (Coming Soon)",
    description: "A mission-driven website for a grassroots CBO/NGO project.",
    tech: "HTML, CSS",
    image: "images/placeholder.png",
    live: "#",
    github: "#",
  },
];

// Only run this if the featured project container exists
const cardContainer = document.getElementById("featured-project-card");

if (cardContainer) {
  let currentIndex = 0;

  function showProject(index) {
    const project = projects[index];
    cardContainer.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-bottom: 2px solid #F2994A;" />
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Built with:</strong> ${project.tech}</p>
          <div class="project-links">
            <a href="${project.live}" target="_blank">Live Demo</a>
            <a href="${project.github}" target="_blank">GitHub</a>
          </div>
        </div>
      `;
  }

  showProject(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
  }, 6000);
}
