const mammoth = require('mammoth');

async function convert(docxPath) {
    const { value } = await mammoth.convertToMarkdown({ path: docxPath });
    return `# DOCX Content\n\n${value}`;
}

module.exports = { convert };