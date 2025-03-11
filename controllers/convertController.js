const path = require('path');
const fs = require('fs');
const pdfConverter = require('../converters/pdfConverter');
const docxConverter = require('../converters/docxConverter');
const pptxConverter = require('../converters/pptxConverter');
const fileUtils = require('../utils/fileUtils');

exports.convertFile = async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).send('No file uploaded');
        }

        const filePath = req.file.path;
        const extension = path.extname(req.file.originalname).toLowerCase();
        const fileNameWithoutExt = path.basename(req.file.originalname, extension);
        const fileNameWithNewExt = `${fileNameWithoutExt}.md`;

        let markdownContent = '';
        switch(extension){
            case '.pdf':
                markdownContent = await pdfConverter.convert(filePath);
                break;
            case '.docx':
                markdownContent = await docxConverter.convert(filePath);
                break;
            case '.pptx':
                markdownContent = await pptxConverter.convert(filePath);
                break;
            default:
                return res.status(400).send('Unsupported file type');
        }

        fs.unlinkSync(filePath);

        const outputDir = path.join(__dirname, '../markdowns');
        const outputFilePath = path.join(outputDir, fileNameWithNewExt);

        fileUtils.writeFile(outputFilePath, markdownContent);
        res.json({ markdownContent });
    } catch (error){
        console.error(error);
        return res.status(500).send(error.message);
    }
}