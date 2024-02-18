const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
    });

    const port = process.env.PORT || 3000; // default for nextjs
    const isDev = !app.isPackaged;
    const url = isDev ? `http://localhost:${port}` : `file://${path.join(__dirname, 'out/index.html')}`;
    win.loadURL(url);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

