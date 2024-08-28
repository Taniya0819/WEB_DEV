import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context_Provider, {CartContext} from './context/Counter_Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context_Provider>
    <App />
  </Context_Provider>
)
