import React from 'react'

export default function Privacy() {
    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text tracking-widest uppercase mb-12 text-center">
                    Gizlilik ve KVKK Politikası
                </h1>

                <div className="space-y-8 text-primary-text-muted dark:text-dark-text-muted leading-relaxed prose dark:prose-invert max-w-none">
                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">Veri Güvenliği ve İşlenme Amaçları</h3>
                    <p>
                        Machinist olarak ziyaretçilerimizin ve müşterilerimizin veri gizliliğine endüstri standartlarında önem vermekteyiz.
                        Alışveriş, üyelik ve bülten kayıt işlemleri sırasında bizimle paylaştığınız tüm kişisel veriler
                        (Ad, Soyad, TC No, E-Posta, Telefon ve Adres gibi) aşağıdaki amaçlar doğrultusunda 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) uygun olarak işlenmektedir:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Kullanıcı deneyiminizi analiz edip satış sonrası hizmetlerimizi iyileştirmek</li>
                        <li>Yasal mevzuatlardan doğan faturalandırma ve lojistik (kargo) sorumluluklarımızı yerine getirmek</li>
                        <li>Kampanyalardan, yeni koleksiyonlardan üyelerimizi ilk sıradan haberdar etmek</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">Çerez Politikası ve Reklam Algoritmaları</h3>
                    <p>
                        Web sitemizi daha iyi bir hız, estetik ve işlevsel altyapıyla sunabilmek amacıyla, oturum bazlı (session) veya sabit amaçlı (persistent) çerezleri kullanıyoruz.
                        Siteye giriş yaparak Sepet (Cart) veya Tema (Karanlık Mod) tercihlerinin cihazınızda geçici tutulmasına izin vermiş olursunuz.
                    </p>

                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">Kullanıcı Veri Silme Hakları</h3>
                    <p>
                        Müşterilerimiz tamamen şifrelenmiş olan Machinist sunucularındaki profillerinin, fatura kayıtlarına yansımayan kısmında her türlü "Silinme/Düzenlenme" hakkına sahiptir.
                        Bununla ilgili taleplerinizi sistem üzerindeki <strong>[Profil]</strong> sekmesinden veya kvkk@machinist.co mail adresinden firmamıza iletebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    )
}
