// main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Start your Express server
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

  // Load the landing page from the pages folder
  win.loadFile(path.join(__dirname, 'pages', 'Main.html'));

  // Optionally open DevTools:
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
