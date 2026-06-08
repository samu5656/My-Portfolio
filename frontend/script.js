const API_URL = "http://localhost:5000/api/projects";

async function fetchProjects() {
  const container = document.getElementById("project-container");

  try {
    const response = await fetch(API_URL);
    const projects = await response.json();

    container.innerHTML = "";

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.techStack}</p>
        <a href="${project.githubLink}" target="_blank">GitHub</a>
        <a href="${project.liveLink}" target="_blank">Live Demo</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Unable to load projects.</p>";
  }
}

fetchProjects();