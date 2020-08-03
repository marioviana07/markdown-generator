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
    ['Apache License 2.0', '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'],
    ['MIT License', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'],
    ['Mozilla Public License 2.0', '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'],
    ['GNU AGPLv3', '![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'],
    ['GNU GPLv3', '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'],
    ['GNU LGPLv3', '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)'],
    ['Boost Software License 1.0', '![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)'],
    ['The unlicense', '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)']
]);


function generateMarkdown(data) {

    let results = '';
    const keys = Object.keys(data)
    console.log("KEYS =>", keys);
    keys.forEach(key => {
        if (key == 'title') {
            const license = data.license;
            console.log(license)
            console.log(mapOfLicenseToBadge)
            const title = data[key];
            results += `# ${title} &middot; ${mapOfLicenseToBadge.get(license)}`;
        } else if (key == 'description') {
            results += `\n Description`;
            results += `\n${data[key]}`;
            results += `\n ## Table of Contents`;
            results += `\n * [Installation](#Installation)`;
            results += `\n * [Usage](#Usage)`;
            results += `\n * [Contribution](#Contribution)`;
            results += `\n * [Test](#Test)`;
        } else if (key == 'email') {
            // results += 'Please email me'
        } else if (key == 'installation') {
            results += `\n# Installation\n\`${data[key]}\`\n`;
        } else if (key == 'usage') {
            results += `\n# Usage\n\`${data[key]}\`\n`;
        } else if (key == 'contribution') {
            results += `\n# Contribution\n\`${data[key]}\`\n`;
        } else if (key == 'test') {
            results += `\n# Test\n\`${data[key]}\`\n`;
        }

    });
    return results;
}





module.exports = generateMarkdown;