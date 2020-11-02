// function to generate markdown for README
generateMarkdown = data => {
  return `# ${data.title}
  ${license(data.license).badge}

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

  ## License
  ${license(data.license).text}
 
  </br>

  ## Contributing
  ${data.contributing}

  </br>

  ## Tests
  ${data.tests}
  
  </br>

  ## Questions

`;
};


license = licenseData => { 
  if ( licenseData === "none") {
    return {
      badge: "",
      text: "This application is not covered under any licenses"
    }
  }
  else {
    return {
      badge: `![GitHub license](<https://img.shields.io/badge/license-${licenseData}-blue.svg>)`,
      text: `This application is covered under the ${licenseData} license.`
    };
  };

};


module.exports = generateMarkdown;
