import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../utils/context/AuthContext';
import { ConversationContextProvider } from '../utils/context/ConversationContext.jsx';
import { SocketContextProvider } from '../utils/context/SocketContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ConversationContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ConversationContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
