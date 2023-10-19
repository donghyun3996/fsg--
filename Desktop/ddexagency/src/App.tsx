import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SignIn from './components/auth/Signin'
import Header from './components/common/header'
import { Drivers } from './components/drivers'
import DWorkload from './components/DWorkload'
import Menu from './components/common/menu'
import Detail from './components/detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Drivers" element={<Drivers />} />
        <Route path="/DWorkload" element={<DWorkload />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
