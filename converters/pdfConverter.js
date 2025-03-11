const pdfParse = require('pdf-parse');
const fs = require('fs');

async function convert(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return `# PDF Content\n\n${data.text}`;
}

module.exports = { convert };