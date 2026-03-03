import React, { useState } from 'react'
import { LogOut, Package, MapPin, CreditCard, User, Heart, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('orders')

    const TABS = [
        { id: 'orders', label: 'Siparişlerim', icon: Package },
        { id: 'addresses', label: 'Adreslerim', icon: MapPin },
        { id: 'payment', label: 'Ödeme Yöntemlerim', icon: CreditCard },
        { id: 'account', label: 'Hesap Bilgileri', icon: User },
        { id: 'wishlist', label: 'İstek Listesi', icon: Heart },
    ]

    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-primary-text/10 dark:border-dark-text/10 pb-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text tracking-widest uppercase mb-2">
                            Profilim
                        </h1>
                        <p className="text-lg text-primary-text-muted dark:text-dark-text-muted font-light">Hoş geldin, Ahmet Yılmaz</p>
                    </div>
                    <button onClick={() => navigate('/login')} className="flex items-center text-red-500 font-bold uppercase tracking-widest text-sm hover:text-red-700 transition-colors mt-6 md:mt-0">
                        <LogOut size={16} className="mr-2" />
                        Çıkış Yap
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4">
                        <nav className="flex flex-col space-y-2">
                            {TABS.map(tab => {
                                const Icon = tab.icon
                                const isActive = activeTab === tab.id
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center justify-between p-4 transition-colors text-sm font-bold uppercase tracking-wider ${isActive
                                            ? 'bg-primary-button dark:bg-dark-button text-white dark:text-black shadow-lg pl-6 border-l-4 border-primary-button-accent dark:border-dark-button-accent'
                                            : 'text-primary-text-muted dark:text-dark-text-muted hover:bg-primary-text/5 dark:hover:bg-dark-text/5 hover:text-primary-text dark:hover:text-dark-text border-l-4 border-transparent pl-4'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <Icon size={18} className="mr-3" />
                                            {tab.label}
                                        </div>
                                        {isActive && <ChevronRight size={16} />}
                                    </button>
                                )
                            })}
                        </nav>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-3/4">
                        {activeTab === 'orders' && (
                            <div className="animate-fade-in">
                                <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-8">Son Siparişiniz</h2>
                                <div className="border border-primary-text/20 dark:border-dark-text/20 p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row justify-between border-b border-primary-text/10 dark:border-dark-text/10 pb-6 mb-6">
                                        <div className="mb-4 md:mb-0">
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted mb-1">Sipariş No</p>
                                            <p className="text-lg font-serif text-primary-text dark:text-dark-text">#MCH-849201</p>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted mb-1">Tarih</p>
                                            <p className="text-base text-primary-text dark:text-dark-text">3 Mart 2026</p>
                                        </div>
                                        <div className="mb-4 md:mb-0">
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted mb-1">Toplam</p>
                                            <p className="text-base font-bold text-primary-text dark:text-dark-text">₺5,498</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted mb-1">Durum</p>
                                            <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 uppercase tracking-widest dark:bg-green-900 dark:text-green-300">
                                                Kargolandı
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-20 bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop" alt="Ceket" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-serif font-bold text-primary-text dark:text-dark-text text-lg">Endüstriyel Deri Ceket</p>
                                                <p className="text-sm text-primary-text-muted dark:text-dark-text-muted">Beden: M | Renk: Siyah | Adet: 1</p>
                                            </div>
                                            <div className="font-bold text-primary-text dark:text-dark-text hidden sm:block">₺4,299</div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-20 bg-gray-100">
                                                <img src="https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=1528&auto=format&fit=crop" alt="Gömlek" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-serif font-bold text-primary-text dark:text-dark-text text-lg">Oxford Klasik Gömlek</p>
                                                <p className="text-sm text-primary-text-muted dark:text-dark-text-muted">Beden: L | Renk: Beyaz | Adet: 1</p>
                                            </div>
                                            <div className="font-bold text-primary-text dark:text-dark-text hidden sm:block">₺1,199</div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-primary-text/10 dark:border-dark-text/10 text-right">
                                        <button className="text-sm font-bold uppercase tracking-widest border border-primary-text/20 dark:border-dark-text/20 text-primary-text dark:text-dark-text px-6 py-3 hover:border-primary-text dark:hover:border-dark-text transition-colors">
                                            Faturayı İndir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'account' && (
                            <div className="animate-fade-in max-w-xl">
                                <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-8">Hesap Bilgileri</h2>
                                <form className="space-y-6 border border-primary-text/10 dark:border-dark-text/10 p-8 shadow-sm">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Ad</label>
                                            <input type="text" defaultValue="Ahmet" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Soyad</label>
                                            <input type="text" defaultValue="Yılmaz" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">E-Posta</label>
                                        <input type="email" defaultValue="ahmet@example.com" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Telefon</label>
                                        <input type="tel" defaultValue="0555 555 5555" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text transition-colors" />
                                    </div>
                                    <button type="button" className="w-full bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors mt-4">
                                        BİLGİLERİ GÜNCELLE
                                    </button>
                                </form>
                            </div>
                        )}

                        {activeTab === 'addresses' && (
                            <div className="animate-fade-in">
                                <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-8">Adreslerim</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border border-primary-text/20 dark:border-dark-text/20 p-6 relative">
                                        <div className="absolute top-6 right-6 flex gap-3">
                                            <button className="text-xs font-bold uppercase tracking-widest text-primary-text-muted hover:text-primary-text dark:hover:text-dark-text transition-colors">Düzenle</button>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-primary-text dark:text-dark-text">Ev Adresi <span className="text-xs bg-primary-text text-primary-bg dark:bg-dark-text dark:text-dark-bg ml-2 px-2 py-1 uppercase rounded-sm">Varsayılan</span></h3>
                                        <p className="text-sm text-primary-text-muted dark:text-dark-text-muted leading-relaxed mb-4">
                                            Ahmet Yılmaz<br />
                                            Atatürk Mah. İstiklal Cad. No:123 D:4<br />
                                            Kadıköy, İstanbul 34700<br />
                                            Telefon: 0555 555 5555
                                        </p>
                                    </div>
                                    <div className="border border-dashed border-primary-text/30 dark:border-dark-text/30 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary-text/5 dark:hover:bg-dark-text/5 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-primary-text/10 dark:bg-dark-text/10 flex items-center justify-center mb-4 text-primary-text dark:text-dark-text">
                                            <span className="text-2xl">+</span>
                                        </div>
                                        <h3 className="font-bold uppercase tracking-widest text-sm text-primary-text dark:text-dark-text">Yeni Adres Ekle</h3>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'payment' && (
                            <div className="animate-fade-in">
                                <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-8">Ödeme Yöntemlerim</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl text-white relative h-48 flex flex-col justify-between shadow-xl">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-300">İş Bankası Maximum</h3>
                                            <CreditCard size={24} className="text-gray-300" />
                                        </div>
                                        <div>
                                            <p className="text-2xl tracking-widest mb-2 font-mono">**** **** **** 4589</p>
                                            <div className="flex justify-between text-sm text-gray-400">
                                                <span>Ahmet Yılmaz</span>
                                                <span>12/28</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-dashed border-primary-text/30 dark:border-dark-text/30 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary-text/5 dark:hover:bg-dark-text/5 transition-colors h-48 rounded-xl">
                                        <div className="w-12 h-12 rounded-full bg-primary-text/10 dark:bg-dark-text/10 flex items-center justify-center mb-4 text-primary-text dark:text-dark-text">
                                            <span className="text-2xl">+</span>
                                        </div>
                                        <h3 className="font-bold uppercase tracking-widest text-sm text-primary-text dark:text-dark-text">Yeni Kart Ekle</h3>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'wishlist' && (
                            <div className="animate-fade-in">
                                <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-8">İstek Listesi</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-6 border border-primary-text/20 dark:border-dark-text/20 p-4">
                                        <div className="w-20 h-24 bg-gray-100">
                                            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop" alt="Ceket" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-serif font-bold text-lg text-primary-text dark:text-dark-text truncate">Endüstriyel Deri Ceket</h3>
                                            <p className="font-bold text-primary-text dark:text-dark-text mt-2">₺4,299</p>
                                        </div>
                                        <div className="flex flex-col gap-3 ml-auto pr-4">
                                            <button className="bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest py-2 px-6 text-xs hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors">Sepete Ekle</button>
                                            <button className="text-red-500 font-bold uppercase tracking-widest py-2 px-6 text-xs border border-red-500 hover:bg-red-50.dark:hover:bg-red-900/20 transition-colors">Kaldır</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    )
}
