import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@app/providers/App.tsx'
import { AppProviders } from '@app/providers/app-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App/>
  </AppProviders>
)
