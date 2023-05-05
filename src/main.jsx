import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './index.css'
import './styles/index.scss'

import { ProjectProvider } from './context/contex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ProjectProvider>
    <App />
    </ProjectProvider>
  </Router>,
)
