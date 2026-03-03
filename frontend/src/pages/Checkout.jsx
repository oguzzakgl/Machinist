import React, { useState } from 'react'
import { CheckCircle2, ChevronRight, Lock } from 'lucide-react'

export default function Checkout() {
    const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Success

    const handleNextStep = (e) => {
        e.preventDefault()
        setStep(step + 1)
    }

    if (step === 3) {
        return (
            <div className="bg-primary-bg dark:bg-dark-bg min-h-[70vh] flex flex-col items-center justify-center pt-12 pb-24 px-4 text-center">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} className="text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-primary-text dark:text-dark-text mb-4 uppercase tracking-widest">
                    Siparişiniz Alındı
                </h1>
                <p className="text-lg text-primary-text-muted dark:text-dark-text-muted mb-8 max-w-lg">
                    Teşekkür ederiz. Sipariş numaranız <strong>#MCH-849201</strong>. Siparişinizin detayları e-posta adresinize gönderilmiştir.
                </p>
                <button onClick={() => setStep(1)} className="bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest px-10 py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors">
                    ALIŞVERİŞE DEVAM ET
                </button>
            </div>
        )
    }

    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Progress Tracker */}
                <div className="flex items-center justify-center space-x-4 mb-16 text-sm font-bold uppercase tracking-widest text-primary-text-muted dark:text-dark-text-muted">
                    <span className={`${step >= 1 ? 'text-primary-text dark:text-dark-text border-b-2 border-primary-button-accent py-1' : ''}`}>1. Kargo</span>
                    <ChevronRight size={16} />
                    <span className={`${step >= 2 ? 'text-primary-text dark:text-dark-text border-b-2 border-primary-button-accent py-1' : ''}`}>2. Ödeme</span>
                    <ChevronRight size={16} />
                    <span>3. Onay</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Checkout Form */}
                    <div className="lg:w-2/3">
                        <form onSubmit={handleNextStep}>
                            {step === 1 && (
                                <div className="space-y-8 animate-fade-in">
                                    <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest border-b border-primary-text/10 dark:border-dark-text/10 pb-4">
                                        Kargo Bilgileri
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Adınız</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="Ahmet" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Soyadınız</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="Yılmaz" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Adresiniz</label>
                                        <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="Örnek Mah. Test Cad. No:1" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">İlçe</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="Kadıköy" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Şehir</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="İstanbul" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Posta Kodu</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="34000" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Telefon</label>
                                        <input required type="tel" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors" placeholder="0555 555 5555" />
                                    </div>

                                    <div className="pt-6">
                                        <button type="submit" className="w-full md:w-auto bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest px-12 py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors">
                                            ÖDEME ADIMINA GEÇ
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div className="flex items-center justify-between border-b border-primary-text/10 dark:border-dark-text/10 pb-4">
                                        <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text uppercase tracking-widest">
                                            Kart Bilgileri
                                        </h2>
                                        <Lock size={20} className="text-green-600 dark:text-green-500" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Kart Üzerindeki İsim</label>
                                        <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors uppercase tracking-wider" placeholder="AHMET YILMAZ" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Kart Numarası</label>
                                        <input required type="text" maxLength={19} className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors text-lg tracking-[0.2em]" placeholder="**** **** **** ****" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">Son Kullanma Tarihi</label>
                                            <input required type="text" className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors tracking-widest" placeholder="AA/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-primary-text-muted dark:text-dark-text-muted">CVC</label>
                                            <input required type="text" maxLength={3} className="w-full bg-transparent border-b-2 border-primary-text/20 dark:border-dark-text/20 px-0 py-3 text-primary-text dark:text-dark-text focus:outline-none focus:border-primary-text dark:focus:border-dark-text transition-colors tracking-widest" placeholder="123" />
                                        </div>
                                    </div>

                                    <div className="pt-6 flex gap-4">
                                        <button type="button" onClick={() => setStep(1)} className="px-8 py-4 border border-primary-text/20 dark:border-dark-text/20 font-bold uppercase tracking-widest text-primary-text dark:text-dark-text text-sm transition-colors hover:border-primary-text dark:hover:border-dark-text">
                                            GERİ DÖN
                                        </button>
                                        <button type="submit" className="flex-1 bg-primary-button dark:bg-dark-button text-white dark:text-black font-bold uppercase tracking-widest px-12 py-4 hover:bg-primary-button-accent dark:hover:bg-dark-button-accent transition-colors flex items-center justify-center">
                                            <Lock size={16} className="mr-2" />
                                            5,498 TL ÖDE
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-primary-text/5 dark:bg-dark-accent p-8 sticky top-28">
                            <h3 className="text-lg font-serif font-bold text-primary-text dark:text-dark-text mb-6 uppercase tracking-wider">
                                Sipariş Özeti
                            </h3>

                            <div className="space-y-4 mb-6 text-sm text-primary-text dark:text-dark-text border-b border-primary-text/10 dark:border-dark-text/10 pb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-primary-text-muted dark:text-dark-text-muted leading-tight w-2/3">Endüstriyel Deri Ceket (M) x1</span>
                                    <span>₺4,299</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-primary-text-muted dark:text-dark-text-muted leading-tight w-2/3">Oxford Klasik Gömlek (L) x1</span>
                                    <span>₺1,199</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6 text-sm text-primary-text dark:text-dark-text border-b border-primary-text/10 dark:border-dark-text/10 pb-6">
                                <div className="flex justify-between">
                                    <span className="text-primary-text-muted dark:text-dark-text-muted">Ara Toplam</span>
                                    <span>₺5,498</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-primary-text-muted dark:text-dark-text-muted">Kargo</span>
                                    <span>Ücretsiz</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="font-bold text-primary-text dark:text-dark-text uppercase tracking-wider">Genel Toplam</span>
                                <span className="text-2xl font-light text-primary-text dark:text-dark-text">
                                    ₺5,498
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
