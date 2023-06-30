import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AnnouncementProvider } from './pages/dashboardAdmin/announcement/announcementContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnnouncementProvider>
      <App />
    </AnnouncementProvider>
  </React.StrictMode>,
)
