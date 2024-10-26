import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './App/store.tsx'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </QueryClientProvider>
  </Provider>
  </StrictMode>,
)
