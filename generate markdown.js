






// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  # Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Instructions](#instructions)
  - [License](#license)
  - [Questions](#questions)
  
  
  ## Description:
  ${data.description}

  ## Installation :
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Instructions:
  ${data.instructions}

  ## License:
  ${data.license}
  
  ## Questions:
     For questions about the generator go to the following link:
     - [GitHub Profile](https://github.com/${data.username})

     For additional questions reach out to my email at: ${data.email}.
  
  `
}
  module.exports = generateMarkdown;