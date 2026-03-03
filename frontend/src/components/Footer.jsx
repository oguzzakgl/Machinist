import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-primary-text/10 dark:border-dark-text/10 bg-primary-bg dark:bg-dark-bg mt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold font-serif tracking-widest text-primary-text dark:text-dark-text block mb-4">
                            MACHINIST
                        </span>
                        <p className="text-sm text-primary-text-muted dark:text-dark-text-muted pr-4">
                            Mühendislik Harikası Giyim. Detaylarda Gizli Kalite, Zamansız Tasarımlar.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary-text dark:text-dark-text">Hızlı Linkler</h3>
                        <ul className="space-y-2 text-sm text-primary-text-muted dark:text-dark-text-muted">
                            <li><Link to="/products?category=erkek" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Erkek</Link></li>
                            <li><Link to="/products?category=kadin" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Kadın</Link></li>
                            <li><Link to="/products?category=aksesuar" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Aksesuar</Link></li>
                            <li><Link to="/discover" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Keşfet</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary-text dark:text-dark-text">Kurumsal</h3>
                        <ul className="space-y-2 text-sm text-primary-text-muted dark:text-dark-text-muted">
                            <li><Link to="/about" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Hakkımızda</Link></li>
                            <li><Link to="/returns" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">İade Politikası</Link></li>
                            <li><Link to="/shipping" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Kargo Bilgileri</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary-text dark:hover:text-dark-text transition-colors">Gizlilik Sözleşmesi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 uppercase tracking-wider text-sm text-primary-text dark:text-dark-text">Bizi Takip Edin</h3>
                        <div className="flex space-x-4">
                            <a href="javascript:void(0)" className="text-primary-text-muted hover:text-primary-text dark:text-dark-text-muted dark:hover:text-dark-text transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="javascript:void(0)" className="text-primary-text-muted hover:text-primary-text dark:text-dark-text-muted dark:hover:text-dark-text transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="javascript:void(0)" className="text-primary-text-muted hover:text-primary-text dark:text-dark-text-muted dark:hover:text-dark-text transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-text/10 dark:border-dark-text/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-text-muted dark:text-dark-text-muted">
                    <p>&copy; {new Date().getFullYear()} Machinist Apparel. Tüm Hakları Saklıdır.</p>
                    <div className="flex mt-4 md:mt-0 space-x-6">
                        <span className="font-bold tracking-widest text-primary-text dark:text-dark-text">VISA</span>
                        <span className="font-bold tracking-widest text-primary-text dark:text-dark-text">MASTERCARD</span>
                        <span className="font-bold tracking-widest text-primary-text dark:text-dark-text">TROY</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
