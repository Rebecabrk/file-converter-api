# File Converter API

## Overview
The **File Converter API** is a RESTful API that allows users to convert files of various formats (e.g., DOCX, PDF, PPTX) into Markdown format. This API is designed to simplify the process of extracting content from documents and transforming it into a structured Markdown format for further use.

---

## Features
- Converts DOCX files to Markdown.
- Converts PDF files to Markdown.
- Converts PPTX files to Markdown.
- Easy-to-use RESTful API.

---

## Input Format
The API accepts file uploads in the following formats:
- **DOCX**: Microsoft Word documents.
- **PDF**: Portable Document Format files.
- **PPTX**: Microsoft PowerPoint presentations.

### Request Example:
The file should be sent as a `multipart/form-data` request.

---

## Output Format
The API returns the converted file content in Markdown format as a plain text response.

---

## API Endpoint
 **POST** `/convert`  
 Converts an uploaded file into Markdown format.  
 - **Request Body**: A file of type DOCX, PDF, or PPTX sent as `multipart/form-data`.  
 - **Response**: The converted content in Markdown format.

---

## Example Usage

### Request:
```bash
POST /convert
Content-Type: multipart/form-data

Attach a file (e.g., `example.docx`) to the request.
```

### Response:
```markdown
# Example Title

This is an example of converted content from the uploaded file.

- Bullet point 1
- Bullet point 2
```

---

## Error Handling
If the input file is invalid or unsupported, the API returns a `400 Bad Request` response with an error message.

Example:
Response:
```json
{
  "error": "Unsupported file type. Please upload a DOCX, PDF, or PPTX file."
}
```

---

## How to Run
1. Install dependencies:
```
npm install cors
npm install express
```
2. Start the server:
```
npm start
```
3. The server will run on `http://localhost:5000`.

---

## Notes
- Ensure the uploaded file is of a supported type (DOCX, PDF, or PPTX).
- The API uses libraries to parse and convert the file content into Markdown format.

---

## License
This project is licensed under the MIT License. 