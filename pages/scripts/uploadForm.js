// pages/scripts/uploadForm.js
document.getElementById('convertButton').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileInput');
  const format = document.getElementById('format').value;

  if (fileInput.files.length === 0) {
    alert('Please select a file to convert.');
    return;
  }

  const file = fileInput.files[0];
  
  // Build a FormData object to send the file and format
  const formData = new FormData();
  formData.append('file', file);
  formData.append('format', format);

  try {
    // POST the data to your conversion endpoint (adjust the URL as needed)
    const response = await fetch('http://localhost:5000/convert', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const result = await response.json();
    document.getElementById('result').innerText = 
      `Conversion successful: ${JSON.stringify(result)}`;
  } catch (err) {
    document.getElementById('result').innerText = 
      `Conversion failed: ${err.message}`;
  }
});
