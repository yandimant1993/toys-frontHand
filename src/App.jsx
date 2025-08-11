// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { store } from '../src/store/store.js'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmp/AppHeader.jsx'
import { AppFooter } from './cmp/AppFooter.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Provider } from 'react-redux'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppHeader />
          <main className='main-layout'>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<HomePage />} path="/toy" />
              <Route element={<ToyIndex />} path="/toy" />
              <Route element={<ToyDetails />} path="/toy/:toyId" />
              <Route element={<ToyEdit />} path="/toy/:toyId" />
            </Routes>
          </main>
          <AppFooter />
        </div>
      </Router>
    </Provider>
  )
}


export default App
