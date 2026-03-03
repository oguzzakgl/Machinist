import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Yarı saydam gri tabaka (overlay) */}
                <img
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop"
                    alt="Machinist Hero Background"
                    className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-[20s]"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/85 z-10"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif text-white tracking-widest mb-6 drop-shadow-lg">
                        MÜHENDİSLİK HARİKASI GİYİM
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-sans font-light italic mb-10 drop-shadow-md">
                        Detaylarda Gizli Kalite, Zamansız Tasarımlar.
                    </p>
                    <Link
                        to="/discover"
                        className="inline-block border border-white text-white px-10 py-4 text-sm font-bold tracking-[0.2em] transition-all hover:bg-white hover:text-black hover:scale-105 duration-300"
                    >
                        KOLEKSİYONU KEŞFET
                    </Link>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-primary-bg dark:bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-text dark:text-dark-text mb-4">ÖNE ÇIKAN PARÇALAR</h2>
                        <div className="w-24 h-1 bg-primary-button-accent dark:bg-dark-button-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Dummy Product 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1636&auto=format&fit=crop" alt="Ceket" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-black font-semibold text-sm px-8 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-wider">
                                        SEPETE EKLE
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-serif text-primary-text dark:text-dark-text text-center">Endüstriyel Deri Ceket</h3>
                            <p className="text-primary-text-muted dark:text-dark-text-muted text-center mt-1">₺4,299</p>
                        </div>

                        {/* Dummy Product 2 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                                <img src="https://images.unsplash.com/photo-1620012253295-c15bc3a6f144?q=80&w=1528&auto=format&fit=crop" alt="Gömlek" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-black font-semibold text-sm px-8 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-wider">
                                        SEPETE EKLE
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-serif text-primary-text dark:text-dark-text text-center">Oxford Klasik Gömlek</h3>
                            <p className="text-primary-text-muted dark:text-dark-text-muted text-center mt-1">₺1,199</p>
                        </div>

                        {/* Dummy Product 3 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                                <img src="https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1587&auto=format&fit=crop" alt="T-Shirt" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-black font-semibold text-sm px-8 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-wider">
                                        SEPETE EKLE
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-serif text-primary-text dark:text-dark-text text-center">Basic Heavy T-Shirt</h3>
                            <p className="text-primary-text-muted dark:text-dark-text-muted text-center mt-1">₺599</p>
                        </div>

                        {/* Dummy Product 4 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-4">
                                <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1597&auto=format&fit=crop" alt="Pantolon" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-black font-semibold text-sm px-8 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-wider">
                                        SEPETE EKLE
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold font-serif text-primary-text dark:text-dark-text text-center">Taktik Cargo Pantolon</h3>
                            <p className="text-primary-text-muted dark:text-dark-text-muted text-center mt-1">₺1,899</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-24 bg-primary-accent dark:bg-dark-accent/10 border-y border-primary-text/5 dark:border-dark-text/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1587&auto=format&fit=crop" alt="Atölye" className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full" />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text mb-6">MÜKEMMELLİĞİN PEŞİNDE</h2>
                            <p className="text-lg text-primary-text-muted dark:text-dark-text-muted leading-relaxed mb-8">
                                Machinist, modern insanın ihtiyaçlarını endüstriyel bir sağlamlık ve tavizsiz bir şıklıkla buluşturur. Her dikişte ustalık, her kumaşta kalite arayışımız, zamana meydan okuyan tasarımlar yaratmamızı sağlar. Mühendislik zekasıyla tasarlanan giysilerimiz sadece bedeninizi değil, ruhunuzun güçlü yanını da sarar.
                            </p>
                            <Link to="/about" className="inline-block border-b-2 border-primary-button-accent dark:border-dark-button-accent pb-1 font-bold text-primary-text dark:text-dark-text hover:text-primary-button-accent dark:hover:text-dark-button-accent transition-colors tracking-widest uppercase text-sm">
                                Hikayemizi Okuyun
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories / Collections */}
            <section className="py-4">
                <div className="flex flex-col md:flex-row h-auto md:h-[60vh]">
                    <div className="md:w-1/2 relative group overflow-hidden h-[50vh] md:h-full cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1587&auto=format&fit=crop" alt="Erkek" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-4xl md:text-5xl border-b-2 border-white/0 group-hover:border-white pb-2 font-serif font-bold text-white tracking-widest transition-all duration-300">ERKEK</h2>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative group overflow-hidden h-[50vh] md:h-full cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1620&auto=format&fit=crop" alt="Kadın" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-4xl md:text-5xl border-b-2 border-white/0 group-hover:border-white pb-2 font-serif font-bold text-white tracking-widest transition-all duration-300">KADIN</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 bg-primary-bg dark:bg-dark-bg text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-primary-text dark:text-dark-text mb-4">MACHINIST DÜNYASINA KATILIN</h2>
                    <p className="mb-8 text-primary-text-muted dark:text-dark-text-muted">En yeni koleksiyonlar, özel indirimler ve stil önerilerinden ilk siz haberdar olun.</p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="px-6 py-4 bg-transparent border-2 border-primary-text/20 dark:border-dark-text/20 focus:outline-none focus:border-primary-text dark:focus:border-dark-text w-full transition-colors text-primary-text dark:text-dark-text placeholder:text-primary-text-muted dark:placeholder:text-dark-text-muted"
                        />
                        <button className="bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors flex-shrink-0">
                            KAYIT OL
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
