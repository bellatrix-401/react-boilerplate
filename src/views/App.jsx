import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import { Content } from './styles'
import { Footer, Header } from '../components'

const App = () => {
  return (
    <Content>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoice" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Content>
  )
}

export default App
