import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true
  })

  window.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(createWindow)
