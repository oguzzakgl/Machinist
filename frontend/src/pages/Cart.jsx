import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react'

const DUMMY_CART = [
    { id: 1, name: 'Endüstriyel Deri Ceket', price: 4299, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop', color: 'Siyah', size: 'M', quantity: 1 },
    { id: 2, name: 'Oxford Klasik Gömlek', price: 1199, image: 'https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=1528&auto=format&fit=crop', color: 'Beyaz', size: 'L', quantity: 2 },
]

export default function Cart() {
    const navigate = useNavigate()
    const subtotal = DUMMY_CART.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const shipping = subtotal > 3000 ? 0 : 150
    const total = subtotal + shipping

    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-widest text-primary-text dark:text-dark-text mb-12 uppercase">
                    Sepetiniz
                </h1>

                {DUMMY_CART.length === 0 ? (
                    <div className="text-center py-20 border-y border-primary-text/10 dark:border-dark-text/10">
                        <p className="text-xl text-primary-text-muted dark:text-dark-text-muted font-light mb-6">Sepetiniz şu anda boş.</p>
                        <Link to="/products" className="inline-block border-2 border-primary-button dark:border-dark-button px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary-button dark:hover:bg-dark-button hover:text-white dark:hover:text-black transition-colors">
                            ALIŞVERİŞE BAŞLA
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-primary-text/10 dark:border-dark-text/10 text-xs font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted">
                                <div className="col-span-6">Ürün</div>
                                <div className="col-span-3 text-center">Fiyat</div>
                                <div className="col-span-3 text-right">Miktar</div>
                            </div>

                            <div className="divide-y divide-primary-text/10 dark:divide-dark-text/10">
                                {DUMMY_CART.map((item) => (
                                    <div key={item.id} className="py-6 sm:py-8 flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">

                                        {/* Product Info */}
                                        <div className="col-span-6 flex items-center gap-6 w-full">
                                            <div className="w-24 h-32 flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <Link to={`/p/${item.id}`} className="font-serif font-bold text-lg text-primary-text dark:text-dark-text hover:text-primary-text-muted transition-colors">
                                                    {item.name}
                                                </Link>
                                                <span className="text-sm text-primary-text-muted dark:text-dark-text-muted mt-1">Renk: {item.color}</span>
                                                <span className="text-sm text-primary-text-muted dark:text-dark-text-muted">Beden: {item.size}</span>
                                                <button className="text-xs flex items-center text-primary-text-muted hover:text-red-500 transition-colors mt-3 w-fit">
                                                    <Trash2 size={14} className="mr-1" />
                                                    Kaldır
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="col-span-3 text-center sm:block hidden text-primary-text dark:text-dark-text">
                                            ₺{item.price.toLocaleString('tr-TR')}
                                        </div>

                                        {/* Quantity */}
                                        <div className="col-span-3 flex justify-between sm:justify-end items-center w-full">
                                            <span className="sm:hidden font-bold">₺{item.price.toLocaleString('tr-TR')}</span>
                                            <div className="flex items-center border border-primary-text/20 dark:border-dark-text/20">
                                                <button className="p-2 text-primary-text-muted hover:text-primary-text dark:hover:text-dark-text transition-colors">
                                                    <Minus size={16} />
                                                </button>
                                                <span className="px-4 text-sm font-bold text-primary-text dark:text-dark-text">{item.quantity}</span>
                                                <button className="p-2 text-primary-text-muted hover:text-primary-text dark:hover:text-dark-text transition-colors">
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-primary-text/5 dark:bg-dark-accent p-8 rounded-none">
                                <h3 className="text-lg font-serif font-bold text-primary-text dark:text-dark-text mb-6 uppercase tracking-wider">
                                    Sipariş Özeti
                                </h3>

                                <div className="space-y-4 mb-6 text-sm text-primary-text dark:text-dark-text border-b border-primary-text/10 dark:border-dark-text/10 pb-6">
                                    <div className="flex justify-between">
                                        <span className="text-primary-text-muted dark:text-dark-text-muted">Ara Toplam</span>
                                        <span>₺{subtotal.toLocaleString('tr-TR')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-primary-text-muted dark:text-dark-text-muted">Kargo</span>
                                        <span>{shipping === 0 ? 'Ücretsiz' : `₺${shipping}`}</span>
                                    </div>
                                    {shipping === 0 && (
                                        <div className="text-xs text-[#9A5A19] dark:text-[#B87333] italic">
                                            3,000 TL üzeri kargo bedava kampanyası uygulandı!
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-end mb-8">
                                    <span className="font-bold text-primary-text dark:text-dark-text uppercase tracking-wider">Genel Toplam</span>
                                    <span className="text-2xl font-light text-primary-text dark:text-dark-text">
                                        ₺{total.toLocaleString('tr-TR')}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <button onClick={() => navigate('/checkout')} className="w-full bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center transition-colors hover:bg-primary-button-accent dark:hover:bg-dark-button-accent group">
                                        ÖDEMEYE GEÇ
                                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                                    </button>
                                    <Link to="/products" className="w-full block text-center border border-primary-text/20 dark:border-dark-text/20 text-primary-text dark:text-dark-text font-bold uppercase tracking-widest py-4 transition-colors hover:border-primary-text dark:hover:border-dark-text">
                                        ALIŞVERİŞE DEVAM ET
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
