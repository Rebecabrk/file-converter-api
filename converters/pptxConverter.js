const pptx2json = require('pptx2json');

async function convert(pptxPath) {
    const data = await pptx2json(pptxPath);
    let markdown = '';

    data.slides.forEach((slide, index) => {
        markdown += `# Slide ${index + 1}\n`;
        slide.texts.forEach(text => {
            markdown += ` - ${text}\n`;
        });
    });
    return markdown;
}

module.exports = { convert };