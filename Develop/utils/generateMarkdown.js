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






module.exports = generateMarkdown;