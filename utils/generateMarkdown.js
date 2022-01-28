// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/license-${License}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== 'None') {
    return `\n* [License](#License)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== 'None') {
    return `\n* [License](#License)\n`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}

  ## Description

  ${data.Description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Testing](#testing)

  * [Questions](#questions)


  ## Installation
  The following dependencies are required for this program:
  \`\`\`
  ${data.Installation}
  \`\`\`

  ## Usage
  To use the program, follow the instructions given:
  \`\`\`
  ${data.Usage}
  \`\`\`

  ## License
  The following license was used:
  \`\`\`
  ${data.License}
  \`\`\`

  ## Contributing
  The following people have contributed to the project:
  \`\`\`
  ${data.Contributing}
  \`\`\`

  ## Testing
  Test the programs functionality by doing the following:
  \`\`\`
  ${data.Testing}
  \`\`\`

  ## Questions
  If you have any questions about the project please reach out to me at the following:
 
  My Email Address <${data.Email}>     
  My Github Account [${data.Github}](https://github.com/${data.Github}/)
 
`;
}

module.exports = generateMarkdown;
