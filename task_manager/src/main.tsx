import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/providers/App.tsx'
import { AppProviders } from './components/app/providers/app-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App/>
  </AppProviders>
)
