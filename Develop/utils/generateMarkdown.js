// function to generate markdown for README
const mapOfKeyToMarkdDown = new Map([
    ['title', '#'],
    ['description', '## Description:'],
    ['Installation', 'Installation instruction:'],
    ['usage', 'Project use:'],
    ['license', 'License:'],
    ['contribution', 'Contribution:'],
    ['github', 'Github UserName:'],
    ['email', 'User E-mail:'],
]);

const mapOfLicenseToBadge = new Map([
    ['Apache License 2.0', '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)']
]);

function generateMarkdown(data) {

    let results = '';
    const keys = Object.keys(data)
    console.log("KEYS =>", keys);
    keys.forEach(key => {
        if (key == 'title') {
            const license = data.license;
            const title = data[key];
            results += `#[${title}](#${title}) &middot; ${mapOfLicenseToBadge.get(license)}`;
        } else if (key == 'description') {
            results += `\n ## Table of Contents`;
            results += `\n*[Installation](#Installation)`;
            results += `\n*[Usage](#Usage)`;
            results += `\n*[Contributing](#Contribution)`;
            results += `\n*[Test](#Test)`;
            results += `\n*[Questions](#Questions)`;
        } else if (key == 'email') {
            results += 'Please email me'
        } else if (key == 'installation') {
            results += `\n# Installation\n\`${data[key]}\`\n`;
        }
    });
    return results;
}



module.exports = generateMarkdown;