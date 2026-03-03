import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Heart, Share2, Ruler } from 'lucide-react'

// Dummy product for preview
const PRODUCT = {
    id: 1,
    name: 'Endüstriyel Deri Ceket',
    price: 4299,
    description: 'Tavizsiz şıklık arayanlar için tasarlandı. Tam sırçalı hakiki dana derisinden üretilen, zamanla karakter kazanan özel bir parça. Ağır metal fermuarları ve aerodinamik kesimi ile klasik ve agresif sokak stili birleşiyor.',
    images: [
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1635&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1521223830114-419b48b6151f?q=80&w=1740&auto=format&fit=crop'
    ],
    colors: [
        { name: 'Siyah', hex: '#000000' },
        { name: 'Taba', hex: '#633A18' },
    ],
    sizes: ['S', 'M', 'L', 'XL']
}

export default function ProductDetail() {
    const [activeImage, setActiveImage] = useState(0)
    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedSize, setSelectedSize] = useState('M')

    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pb-24">
            {/* Breadcrumbs */}
            <div className="border-b border-primary-text/10 dark:border-dark-text/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-primary-text-muted dark:text-dark-text-muted">
                    <Link to="/" className="hover:text-primary-text dark:hover:text-dark-text">Anasayfa</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <Link to="/products?category=erkek" className="hover:text-primary-text dark:hover:text-dark-text">Erkek</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-primary-text dark:text-dark-text font-bold">{PRODUCT.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Image Gallery */}
                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <div className="flex-1">
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img src={PRODUCT.images[activeImage]} alt={PRODUCT.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-zoom-in" />
                            </div>
                        </div>
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0">
                            {PRODUCT.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`aspect-[3/4] w-20 md:w-full flex-shrink-0 overflow-hidden border-2 ${activeImage === idx ? 'border-primary-text dark:border-dark-text' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-start">
                        <div className="flex justify-between items-start">
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text mb-4 leading-tight">
                                {PRODUCT.name}
                            </h1>
                            <button className="text-primary-text-muted hover:text-red-500 transition-colors mt-2">
                                <Heart size={28} />
                            </button>
                        </div>

                        <p className="text-2xl font-light tracking-wider text-primary-text dark:text-dark-text mb-8 border-b border-primary-text/10 dark:border-dark-text/10 pb-6">
                            ₺{PRODUCT.price.toLocaleString('tr-TR')}
                        </p>

                        {/* Colors */}
                        <div className="mb-8">
                            <span className="text-sm font-bold uppercase tracking-wider mb-3 block text-primary-text dark:text-dark-text">
                                Renk: <span className="font-light">{PRODUCT.colors[selectedColor].name}</span>
                            </span>
                            <div className="flex gap-4">
                                {PRODUCT.colors.map((c, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(idx)}
                                        className={`w-10 h-10 rounded-full border-2 ${selectedColor === idx ? 'ring-2 ring-primary-text dark:ring-dark-text border-transparent' : 'border-gray-200 opacity-70'}`}
                                        style={{ backgroundColor: c.hex }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sizes */}
                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-3">
                                <span className="text-sm font-bold uppercase tracking-wider text-primary-text dark:text-dark-text">Beden</span>
                                <button className="text-xs flex items-center text-primary-text-muted dark:text-dark-text-muted hover:text-primary-text dark:hover:text-dark-text transition-colors">
                                    <Ruler size={14} className="mr-1" />
                                    Beden Tablosu
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {PRODUCT.sizes.map((s, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedSize(s)}
                                        className={`py-3 text-sm font-semibold transition-colors duration-200 border ${selectedSize === s
                                            ? 'bg-primary-text text-primary-bg dark:bg-dark-text dark:text-dark-bg border-primary-text dark:border-dark-text'
                                            : 'border-primary-text/20 dark:border-dark-text/20 text-primary-text dark:text-dark-text hover:border-primary-text dark:hover:border-dark-text'
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="flex gap-4 mb-12">
                            <button className="flex-1 bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest py-4 transition-colors hover:bg-primary-button-accent dark:hover:bg-dark-button-accent">
                                SEPETE EKLE
                            </button>
                        </div>

                        {/* Description Details */}
                        <div className="border-t border-primary-text/10 dark:border-dark-text/10 pt-8">
                            <div className="text-sm text-primary-text-muted dark:text-dark-text-muted prose prose-p:mb-4">
                                <p>{PRODUCT.description}</p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li>%100 Hakiki Dana Derisi</li>
                                    <li>Özel Korozyon Önleyici Fermuarlar</li>
                                    <li>Antibakteriyel Astar Tasarımı</li>
                                    <li>Tamamen El İşçiliği İle Üretilmiştir</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-b border-primary-text/10 dark:border-dark-text/10 py-6 mt-8 flex items-center justify-between">
                            <span className="text-sm font-bold tracking-wider text-primary-text dark:text-dark-text uppercase">Paylaş</span>
                            <button className="text-primary-text-muted hover:text-primary-text dark:hover:text-dark-text transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
