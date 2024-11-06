
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'; 
import App from './App'; 
import { store } from './App/store/store';



const queryClient = new QueryClient();


const container = document.getElementById('root');

if (container) {

  const root = createRoot(container);
  root.render(
    <StrictMode>
      <ToastContainer/>
      <Provider store={store}> 
        <QueryClientProvider client={queryClient}> 
          <BrowserRouter> 
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
}
