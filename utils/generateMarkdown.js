// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  </br>

  ## Table of Contents

  </br>

  ## Installation
  ${data.installation}

  </br>

  ## Usage
  ${data.usage}

  </br>

  ## Licesnse
  
  </br>

  ## Contributing
  ${data.contributing}

  </br>

  ## Tests
  ${data.tests}
  
  </br>

  ## Questions

`;
}

module.exports = generateMarkdown;
