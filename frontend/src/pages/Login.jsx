import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock login
        navigate('/profile')
    }

    const mockSocialLogin = () => {
        navigate('/profile')
    }

    return (
        <div className="flex min-h-screen bg-primary-bg dark:bg-dark-bg">
            {/* Left side: Image */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1740&auto=format&fit=crop"
                    alt="Machinist Man"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-x-0 bottom-24 p-12 text-white">
                    <h2 className="text-5xl font-serif font-bold tracking-widest mb-4 uppercase">
                        MACHINIST <br /> DÜNYASI
                    </h2>
                    <p className="text-xl font-light italic max-w-md">Kayıtlı üyelerimize özel ayrıcalıklar, davetiyeler ve sınırlı üretim koleksiyonlar.</p>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-2">
                        {isLogin ? 'ÜYE GİRİŞİ' : 'HESAP OLUŞTUR'}
                    </h1>
                    <p className="text-sm text-primary-text-muted dark:text-dark-text-muted mb-10">
                        {isLogin ? 'Machinist hesabınıza giriş yapın.' : 'Machinist dünyasının ayrıcalıklarına katılın.'}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Ad Soyad</label>
                                <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">E-posta Adresi</label>
                            <input required type="email" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Şifre</label>
                                {isLogin && <a href="#" className="text-xs text-primary-text-muted hover:text-primary-text dark:text-dark-text-muted dark:hover:text-dark-text transition-colors">Şifremi Unuttum</a>}
                            </div>
                            <input required type="password" minLength={6} className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" />
                        </div>

                        <button type="submit" className="w-full bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors mt-8">
                            {isLogin ? 'GİRİŞ YAP' : 'ÜYE OL'}
                        </button>

                        {/* Social logins */}
                        <div className="mt-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-primary-text/10 dark:border-dark-text/10"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-primary-bg dark:bg-dark-bg text-primary-text-muted dark:text-dark-text-muted uppercase tracking-wider text-xs font-bold">veya</span>
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <button type="button" onClick={mockSocialLogin} className="w-full flex justify-center items-center px-4 py-3 border border-primary-text/20 dark:border-dark-text/20 text-sm font-bold text-primary-text dark:text-dark-text hover:bg-primary-text/5 dark:hover:bg-dark-text/5 transition-colors uppercase tracking-wider">
                                    Google
                                </button>
                                <button type="button" onClick={mockSocialLogin} className="w-full flex justify-center items-center px-4 py-3 border border-primary-text/20 dark:border-dark-text/20 text-sm font-bold text-primary-text dark:text-dark-text hover:bg-primary-text/5 dark:hover:bg-dark-text/5 transition-colors uppercase tracking-wider">
                                    Apple
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-sm font-bold text-primary-text dark:text-dark-text uppercase tracking-widest border-b border-primary-text dark:border-dark-text pb-1 hover:text-primary-button-accent dark:hover:text-dark-button-accent hover:border-primary-button-accent dark:hover:border-dark-button-accent transition-colors"
                            >
                                {isLogin ? "HESABINIZ YOK MU? BİZE KATILIN" : "ZATEN ÜYE MİSİNİZ? GİRİŞ YAPIN"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
