function createJson() {
    // Collect user input
    const projectName = document.getElementById('project-name').value;
    const description = document.getElementById('description').value;
    const selectedSkills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skill => skill.value);
    const status = document.querySelector('input[name="status"]:checked').value;
    const level = document.getElementById('level').value;
  
    // Create JSON object
    const jsonTemplate = {
      "Project_Id": 1,
      "Project_Name": projectName,
      "Description": description,
      "Skills": selectedSkills,
      "Status": status,
      "Level": [level]
    };
  
    // Display or send the JSON object as needed
    console.log(JSON.stringify(jsonTemplate, null, 2)); // Log the JSON object
    

    fetch('http://localhost:3000/saveUserData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonTemplate),
  })
    .then(response => {
      if (response.ok) {
        console.log('Data sent to the server successfully.');
      } else {
        console.error('Failed to send data to the server.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
const createJsonButton = document.querySelector('#create-json-button');

createJsonButton.addEventListener('click', createJson);