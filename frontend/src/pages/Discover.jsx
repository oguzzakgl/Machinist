import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

export default function Discover() {
    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pb-24">
            {/* Header */}
            <div className="pt-16 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-widest text-primary-text dark:text-dark-text mb-4">
                    LOOKBOOK
                </h1>
                <p className="text-lg text-primary-text-muted dark:text-dark-text-muted max-w-2xl mx-auto font-light">
                    Şehrin ritmine ayak uyduran, iş dünyasından sokağa taşınan zamansız Machinist koleksiyonlarını keşfedin.
                </p>
            </div>

            {/* Editorial Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                    {/* Main Large Image */}
                    <div className="md:col-span-8 relative group cursor-crosshair">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1587&auto=format&fit=crop"
                                alt="Editorial 1"
                                className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-105"
                            />
                        </div>

                        {/* Interactive Hotspot */}
                        <div className="absolute top-[40%] left-[30%] group-hover:block hidden">
                            <div className="relative">
                                <div className="w-10 h-10 bg-primary-button dark:bg-dark-button rounded-full flex items-center justify-center animate-pulse text-white shadow-xl cursor-pointer peer active:scale-95 transition-transform">
                                    <Plus size={20} />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute left-14 top-0 bg-white dark:bg-dark-accent p-4 shadow-2xl w-48 opacity-0 peer-hover:opacity-100 transition-opacity z-10 border border-gray-100 dark:border-gray-800">
                                    <p className="font-bold text-sm text-black dark:text-white">Klasik Oxford Gömlek</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">₺1,199</p>
                                    <Link to="/p/oxford-gomlek" className="text-xs uppercase font-bold border-b border-black dark:border-white mt-2 inline-block text-black dark:text-white active:scale-95 transition-transform">İncele</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Images */}
                    <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 justify-between">
                        <div className="relative group">
                            <div className="aspect-square w-full overflow-hidden bg-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1636&auto=format&fit=crop"
                                    alt="Editorial 2"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-serif font-bold text-lg text-primary-text dark:text-dark-text">DOKUNUŞ</h3>
                                <p className="text-sm text-primary-text-muted dark:text-dark-text-muted mt-2">Premium İtalyan Yün Kaban</p>
                            </div>
                        </div>

                        <div className="flex-grow flex flex-col justify-end">
                            <p className="text-xl font-serif font-light text-primary-text dark:text-dark-text border-l-4 border-primary-button-accent pl-4 mb-4">
                                "Bir ceket sadece sizi soğuktan korumaz, dünyaya kim olduğunuzu söyler."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
                    <div className="relative group">
                        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1587&auto=format&fit=crop"
                                alt="Editorial 3"
                                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-3xl font-serif text-white tracking-widest">SOKAK STİLİ</h3>
                            <Link to="/products?category=street" className="text-white text-sm uppercase tracking-wider border-b border-white mt-4 inline-block hover:text-primary-button-accent hover:border-primary-button-accent transition-all active:scale-95">
                                Parçaları İncele
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop"
                                alt="Editorial 4"
                                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-3xl font-serif text-white tracking-widest">ATÖLYE GÜNLÜKLERİ</h3>
                            <Link to="/about" className="text-white text-sm uppercase tracking-wider border-b border-white mt-4 inline-block hover:text-primary-button-accent hover:border-primary-button-accent transition-all active:scale-95">
                                Üretim Sürecimiz
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
