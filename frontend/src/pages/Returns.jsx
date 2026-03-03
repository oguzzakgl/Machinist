import React from 'react'

export default function Returns() {
    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text tracking-widest uppercase mb-12 text-center">
                    İade Şartları
                </h1>

                <div className="space-y-8 text-primary-text-muted dark:text-dark-text-muted leading-relaxed prose dark:prose-invert max-w-none">
                    <p>
                        Müşteri memnuniyeti bizim için her şeyden önde gelir. Machinist atölyesinden aldığınız ürünlerin size tam olarak
                        uymaması veya beklentilerinizi karşılamaması durumunda, teslimat tarihinden itibaren 30 gün içerisinde iade talebinde bulunabilirsiniz.
                    </p>

                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">İade Koşulları</h3>
                    <ul className="list-disc pl-6">
                        <li>Ürün kullanılmamış, etiketi koparılmamış ve orijinal ambalajında olmalıdır.</li>
                        <li>Deri ürünlerde, kullanım veya deneme esnasında oluşabilecek kat izi, kırışıklık olmamasına özen gösterilmelidir. Aksi takdirde iade reddedilebilir.</li>
                        <li>Özel dikim veya kişiselleştirilmiş (isme özel damgalanmış) ürünlerde iade yapılamamaktadır.</li>
                        <li>İade kargo ücretleri bizim tarafımızdan karşılanmaktadır, size sağlanan kod ile anlaşmalı kargo şubelerinden teslim edebilirsiniz.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary-text dark:text-dark-text mt-8">İade Süreci</h3>
                    <p>
                        İade süreci, ürün depo ekibimize ulaşıp gerekli kontrollerden geçtikten sonra başlar.
                        Kontrollerden 1-3 iş günü sonra iadeniz onaylanıp, ödeme yönteminize bağlı olarak 3-7 iş günü içerisinde bakiyenize yansır.
                    </p>
                </div>
            </div>
        </div>
    )
}
