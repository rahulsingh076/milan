const year = document.querySelector("#year");
const tabs = document.querySelectorAll(".tab");
const navLinks = document.querySelectorAll(".side-nav a");
const projectType = document.querySelector("#projectType");
const projectTitle = document.querySelector("#projectTitle");
const projectText = document.querySelector("#projectText");

const projects = {
  profile: {
    type: "HTML + CSS",
    title: "Student Profile Website",
    text:
      "A clean one-page profile website showing student details, skills, contact information, and project sections."
  },
  gallery: {
    type: "Responsive Layout",
    title: "Nepal Photo Gallery",
    text:
      "A simple image gallery concept with responsive cards, captions, and flexible spacing for mobile screens."
  },
  calculator: {
    type: "JavaScript",
    title: "Basic Calculator",
    text:
      "A small JavaScript calculator idea for practicing buttons, events, number input, and DOM updates."
  }
};

year.textContent = new Date().getFullYear();

const activeHash = window.location.hash || "#details";

navLinks.forEach((link) => {
  if (link.getAttribute("href") === activeHash) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedProject = projects[tab.dataset.project];

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    projectType.textContent = selectedProject.type;
    projectTitle.textContent = selectedProject.title;
    projectText.textContent = selectedProject.text;
  });
});
