// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Require your Express server to start it
require('./server.js');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false
    }
  });

  // Load the index.html from the pages folder
  win.loadFile(path.join(__dirname, 'pages', 'index.html'));

  // Optional: open DevTools
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
