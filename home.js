const userCardTemplate =document.querySelector("[data-user-template]");
const cardsContainer =document.querySelector("[data-cards-container]");
const searchInput =document.querySelector("[data-search]");

let projects=[]

searchInput.addEventListener("input", e =>{
    const value= e.target.value
    projects.forEach(project => {
        const isVisible = (
            (project.header && typeof project.header === 'string' && project.header.toLowerCase().indexOf(value) !== -1) ||
            (project.description && typeof project.description === 'string' && project.description.toLowerCase().indexOf(value) !== -1) ||
            (Array.isArray(project.skills) && project.skills.some((skill) => typeof skill === 'string' && skill.toLowerCase().indexOf(value) !== -1)) ||
            (project.level && typeof project.level === 'string' && project.level.toLowerCase().indexOf(value) !== -1) ||
            (project.status && typeof project.status === 'string' && project.status.toLowerCase().indexOf(value) !== -1)
          );
          
          
          

        project.element.classList.toggle("hide", !isVisible)
    });
})


fetch("SpaceApps.Projects.json")
  .then((response) => response.json())
  .then((data) => {
    projects = data.map((project) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const description = card.querySelector("[data-description]");
      const skillsContainer = card.querySelector("[data-skills]");
      const status = card.querySelector("[data-status]");
      const level = card.querySelector("[data-level]");
  
      // Now you can populate the card with data from the JSON
      header.textContent = project.Project_Name;
      description.textContent = project.Description;
      status.textContent = project.Status;
      level.textContent = project.Level;

  
      if (Array.isArray(project.Skills)) { // Check if Skills is an array
        // Create skill elements and append them to the skills container
        project.Skills.forEach((skillText) => {
          const skillElement = document.createElement("div");
          skillElement.classList.add("skill");
          skillElement.textContent = skillText;
          skillsContainer.appendChild(skillElement);
        });
      }
  
      // Rest of your code...
  
      cardsContainer.append(card);
      return {
        header: project.Project_Name,
        description: project.Description,
        skills: project.Skills,
        level: project.Level,
        element: card,
      };
    });
  })
  
