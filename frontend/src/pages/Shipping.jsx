import React from 'react'

export default function Shipping() {
    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text tracking-widest uppercase mb-12 text-center">
                    Kargo Bilgileri
                </h1>

                <div className="space-y-8 text-primary-text-muted dark:text-dark-text-muted leading-relaxed prose dark:prose-invert max-w-none">
                    <p>
                        Siparişinizin size en güvenli ve hızlı şekilde ulaşması için özenle çalışıyoruz. Özel endüstriyel kutularımız
                        ve darbe emici ambalajlarımızla ürünleriniz dış etkenlere karşı korunmaktadır.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="border border-primary-text/10 dark:border-dark-text/10 p-6">
                            <h3 className="text-lg font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-4">Standart Teslimat</h3>
                            <p className="text-3xl font-light text-primary-text dark:text-dark-text mb-2">Ücretsiz</p>
                            <p className="text-sm">Tüm Türkiye içi gönderimlerde standart teslimat ücretsizdir.</p>
                            <ul className="text-sm mt-4 space-y-2 opacity-80">
                                <li>- Sipariş onayı sonrası 1-3 iş günü hazırlık</li>
                                <li>- Kargolamadan sonra 2-4 iş günü teslimat</li>
                                <li>- Anlaşmalı Yurtiçi veya Aras Kargo ile gönderim</li>
                            </ul>
                        </div>

                        <div className="border border-primary-text dark:border-dark-text p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary-text dark:bg-dark-text text-white dark:text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                                Tavsiye Edilen
                            </div>
                            <h3 className="text-lg font-bold text-primary-text dark:text-dark-text uppercase tracking-widest mb-4">VIP Express Teslimat</h3>
                            <p className="text-3xl font-light text-primary-text dark:text-dark-text mb-2">₺199</p>
                            <p className="text-sm">Özel kurye ile güvenli ve aynı/ertesi gün kapıda teslim avantajı.</p>
                            <ul className="text-sm mt-4 space-y-2 opacity-80">
                                <li>- Sadece İstanbul, Ankara, İzmir için geçerlidir</li>
                                <li>- Sipariş saat 14:00'den önce verilmişse ertesi gün</li>
                                <li>- Gecikme durumunda para iadesi</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">Sipariş Takibi</h3>
                    <p>
                        Siparişiniz kargoya teslim edildiğinde, size bir SMS ve E-posta ile Kargo Takip Numarası gönderilmektedir.
                        Ayrıca sitemize giriş yaparak <strong>Profil {'>'} Siparişlerim</strong> sekmesinden siparişinizin güncel durumunu anlık takip edebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    )
}
