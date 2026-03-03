import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingCart, User, Moon, Sun } from 'lucide-react'
import { useThemeStore } from '../store/useThemeStore'

export default function Navbar() {
    const { isDark, toggleDark } = useThemeStore()

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl md:text-3xl font-bold font-serif tracking-widest text-white">
                            MACHINIST
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center text-gray-300">
                        <Link to="/products?category=erkek" className="text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Erkek</Link>
                        <Link to="/products?category=kadin" className="text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Kadın</Link>
                        <Link to="/products?category=aksesuar" className="text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Aksesuar</Link>
                        <Link to="/discover" className="text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors">Keşfet</Link>
                    </div>

                    <div className="flex items-center space-x-4 md:space-x-6 text-white">
                        <button onClick={toggleDark} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="hidden sm:block p-2 hover:text-gray-300 transition-colors">
                            <Search size={20} />
                        </button>
                        <Link to="/profile" className="p-2 hover:text-gray-300 transition-colors">
                            <User size={20} />
                        </Link>
                        <Link to="/cart" className="p-2 hover:text-gray-300 transition-colors relative">
                            <ShoppingCart size={20} />
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[0.65rem] font-bold leading-none text-black bg-white rounded-full">0</span>
                        </Link>
                        <button className="md:hidden p-2 hover:text-gray-300 transition-colors">
                            <Menu size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}
