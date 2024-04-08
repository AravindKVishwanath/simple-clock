const { app, BrowserWindow ,Menu } = require("electron");
const path = require('path')

const menuItems = [
    {
        label:"Menu",
        submenu:[
            {
                label:"About"
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuItems)
Menu.setApplicationMenu(menu)

const createWindow = () => {
  const win = new BrowserWindow({
    width: "200px",
    height: "300px",
    icon: path.join(__dirname, 'assets/clock.jpg'),
    //backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
