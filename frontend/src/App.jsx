import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useThemeStore } from './store/useThemeStore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import About from './pages/About'
import Returns from './pages/Returns'
import Shipping from './pages/Shipping'
import Privacy from './pages/Privacy'

function App() {
  const { initTheme } = useThemeStore()

  useEffect(() => {
    initTheme()
  }, [initTheme])

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-primary-bg dark:bg-dark-bg text-primary-text dark:text-dark-text font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/products" element={<Products />} />
            <Route path="/p/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
