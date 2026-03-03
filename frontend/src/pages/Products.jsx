import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

const DUMMY_PRODUCTS = [
    // Erkek (5 ürün)
    { id: 1, name: 'Endüstriyel Deri Ceket', price: 4299, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop', category: 'erkek', subcategory: 'ceket', size: 'M', color: '#000000' },
    { id: 2, name: 'Oxford Klasik Gömlek', price: 1199, image: 'https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=1528&auto=format&fit=crop', category: 'erkek', subcategory: 'gomlek', size: 'L', color: '#FFFFFF' },
    { id: 7, name: 'Oversize Basic T-Shirt', price: 499, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop', category: 'erkek', subcategory: 'tshirt', size: 'XL', color: '#36454F' },
    { id: 8, name: 'Taktik Cargo Pantolon', price: 1899, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1597&auto=format&fit=crop', category: 'erkek', subcategory: 'pantolon', size: 'M', color: '#9A5A19' },
    { id: 9, name: 'Slim Fit Chino Pantolon', price: 1499, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1686&auto=format&fit=crop', category: 'erkek', subcategory: 'pantolon', size: 'L', color: '#F5F5DC' },

    // Kadın (5 ürün)
    { id: 3, name: 'Basic Heavy T-Shirt', price: 599, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1680&auto=format&fit=crop', category: 'kadin', subcategory: 'tshirt', size: 'S', color: '#FFFFFF' },
    { id: 5, name: 'Keten Dokulu Gömlek', price: 1299, image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?q=80&w=1587&auto=format&fit=crop', category: 'kadin', subcategory: 'gomlek', size: 'M', color: '#F5F5DC' },
    { id: 10, name: 'Deri Görünümlü Pantolon', price: 2199, image: 'https://images.unsplash.com/photo-1509631179647-0c500ba127b8?q=80&w=1587&auto=format&fit=crop', category: 'kadin', subcategory: 'pantolon', size: 'S', color: '#000000' },
    { id: 11, name: 'Kruvaze Yün Ceket', price: 3499, image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1587&auto=format&fit=crop', category: 'kadin', subcategory: 'ceket', size: 'M', color: '#36454F' },
    { id: 12, name: 'Dökümlü Saten Gömlek', price: 1599, image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1740&auto=format&fit=crop', category: 'kadin', subcategory: 'gomlek', size: 'L', color: '#000080' },

    // Sokak Stili - Street (3 ürün)
    { id: 17, name: 'Reflektörlü Rüzgarlık', price: 1999, image: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&w=1587&auto=format&fit=crop', category: 'street', subcategory: 'ceket', size: 'L', color: '#FFFFFF' },
    { id: 18, name: 'Baskılı Hoodie', price: 1299, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1587&auto=format&fit=crop', category: 'street', subcategory: 'tshirt', size: 'XL', color: '#000000' },
    { id: 19, name: 'Paraşüt Kumaş Eşofman', price: 1499, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1740&auto=format&fit=crop', category: 'street', subcategory: 'pantolon', size: 'M', color: '#36454F' },

    // Aksesuar (5 ürün)
    { id: 6, name: 'Kanvas El Çantası', price: 2199, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1638&auto=format&fit=crop', category: 'aksesuar', subcategory: 'canta', size: 'XL', color: '#000080' },
    { id: 13, name: 'Deri Minimal Cüzdan', price: 899, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1588&auto=format&fit=crop', category: 'aksesuar', subcategory: 'cuzdan', size: 'S', color: '#9A5A19' },
    { id: 14, name: 'Klasik Tokalı Kemer', price: 699, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1587&auto=format&fit=crop', category: 'aksesuar', subcategory: 'kemer', size: 'M', color: '#000000' },
    { id: 15, name: 'Güneş Gözlüğü', price: 1499, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop', category: 'aksesuar', subcategory: 'gozluk', size: 'M', color: '#36454F' },
    { id: 16, name: 'Gümüş Zincir Kolye', price: 1199, image: 'https://images.unsplash.com/photo-1599643478524-fb524458cc00?q=80&w=1738&auto=format&fit=crop', category: 'aksesuar', subcategory: 'kolie', size: 'S', color: '#FFFFFF' },
]

export default function Products() {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const categoryParam = searchParams.get('category')

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [selectedCats, setSelectedCats] = useState([])
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)

    // Filter Logic
    const products = DUMMY_PRODUCTS.filter(p => {
        const matchMainCategory = categoryParam ? p.category === categoryParam : true
        const matchSubCategory = selectedCats.length > 0 ? selectedCats.includes(p.subcategory) : true
        const matchSize = selectedSize ? p.size === selectedSize : true
        const matchColor = selectedColor ? p.color === selectedColor : true

        return matchMainCategory && matchSubCategory && matchSize && matchColor
    })

    const toggleSubcat = (cat) => {
        if (selectedCats.includes(cat)) {
            setSelectedCats(selectedCats.filter(c => c !== cat))
        } else {
            setSelectedCats([...selectedCats, cat])
        }
    }

    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-8 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary-text/10 dark:border-dark-text/10 pb-6 mb-8 gap-4">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-widest text-primary-text dark:text-dark-text">
                        {categoryParam ? `${categoryParam} KOLEKSİYONU` : 'TÜM ÜRÜNLER'}
                    </h1>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden flex items-center space-x-2 text-sm font-bold uppercase tracking-wider"
                        >
                            <SlidersHorizontal size={18} />
                            <span>Filtreler</span>
                        </button>

                        <div className="relative group flex items-center space-x-2 text-sm font-bold uppercase tracking-wider cursor-pointer">
                            <span>Sırala: En Yeniler</span>
                            <ChevronDown size={16} />
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-accent shadow-xl border border-gray-100 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                                <div className="py-2 flex flex-col">
                                    <span className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-black dark:text-white">En Yeniler</span>
                                    <span className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-black dark:text-white">Fiyat (Düşükten Yükseğe)</span>
                                    <span className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-black dark:text-white">Fiyat (Yüksekten Düşüğe)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">

                    {/* Sidebar Filters */}
                    <div className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
                        <div className="space-y-8 sticky top-28">
                            {/* Category Filter */}
                            <div>
                                <h3 className="font-bold uppercase tracking-wider mb-4 border-b border-primary-text/10 dark:border-dark-text/10 pb-2">Kategori</h3>
                                <div className="space-y-2 text-sm text-primary-text-muted dark:text-dark-text-muted">
                                    <div className="flex items-center space-x-3 cursor-pointer hover:text-primary-text dark:hover:text-dark-text" onClick={() => toggleSubcat('tshirt')}>
                                        <input type="checkbox" checked={selectedCats.includes('tshirt')} readOnly className="w-4 h-4 accent-primary-button dark:accent-dark-button" />
                                        <label>T-Shirt</label>
                                    </div>
                                    <div className="flex items-center space-x-3 cursor-pointer hover:text-primary-text dark:hover:text-dark-text" onClick={() => toggleSubcat('gomlek')}>
                                        <input type="checkbox" checked={selectedCats.includes('gomlek')} readOnly className="w-4 h-4 accent-primary-button dark:accent-dark-button" />
                                        <label>Gömlek</label>
                                    </div>
                                    <div className="flex items-center space-x-3 cursor-pointer hover:text-primary-text dark:hover:text-dark-text" onClick={() => toggleSubcat('ceket')}>
                                        <input type="checkbox" checked={selectedCats.includes('ceket')} readOnly className="w-4 h-4 accent-primary-button dark:accent-dark-button" />
                                        <label>Ceket</label>
                                    </div>
                                    <div className="flex items-center space-x-3 cursor-pointer hover:text-primary-text dark:hover:text-dark-text" onClick={() => toggleSubcat('pantolon')}>
                                        <input type="checkbox" checked={selectedCats.includes('pantolon')} readOnly className="w-4 h-4 accent-primary-button dark:accent-dark-button" />
                                        <label>Pantolon</label>
                                    </div>
                                </div>
                            </div>

                            {/* Size Filter */}
                            <div>
                                <h3 className="font-bold uppercase tracking-wider mb-4 border-b border-primary-text/10 dark:border-dark-text/10 pb-2">Beden</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {['S', 'M', 'L', 'XL'].map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                                            className={`border py-2 text-sm font-semibold transition-colors ${selectedSize === size
                                                ? 'border-primary-text dark:border-dark-text bg-primary-text dark:bg-dark-text text-white dark:text-black'
                                                : 'border-primary-text/20 dark:border-dark-text/20 hover:border-primary-text dark:hover:border-dark-text'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Filter */}
                            <div>
                                <h3 className="font-bold uppercase tracking-wider mb-4 border-b border-primary-text/10 dark:border-dark-text/10 pb-2">Renk</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['#000000', '#FFFFFF', '#36454F', '#9A5A19', '#000080', '#F5F5DC'].map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                                            className={`w-8 h-8 rounded-full ${color === '#FFFFFF' || color === '#F5F5DC' ? 'border border-gray-300' : ''} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-primary-text dark:ring-dark-text' : ''
                                                }`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button onClick={() => { setSelectedCats([]); setSelectedColor(null); setSelectedSize(null); }} className="w-full bg-primary-button dark:bg-dark-button text-white dark:text-black py-3 font-bold tracking-wider hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors mt-4">
                                FİLTRELERİ TEMİZLE
                            </button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <Link to={`/p/${product.id}`} key={product.id} className="group cursor-pointer block">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                                        <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                    <h3 className="text-lg font-bold font-serif text-primary-text dark:text-dark-text truncate">{product.name}</h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <p className="text-primary-text-muted dark:text-dark-text-muted">₺{product.price}</p>
                                        <div className="flex space-x-1">
                                            <div className="w-3 h-3 rounded-full bg-black"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#9A5A19]"></div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
