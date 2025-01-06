import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import NameForm from './nameform.jsx'
import Apps from './Apps.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <NameForm/> */}
    <Apps/>
  </StrictMode>,
)
