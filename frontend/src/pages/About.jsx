import React from 'react'

export default function About() {
    return (
        <div className="bg-primary-bg dark:bg-dark-bg min-h-screen pt-12 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-text dark:text-dark-text tracking-widest uppercase mb-12 text-center">
                    Hikayemiz & Üretim Sürecimiz
                </h1>

                <div className="space-y-12 text-primary-text-muted dark:text-dark-text-muted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text mb-4 text-center">Felsefemiz</h2>
                        <p className="mb-4">
                            Machinist, sadece kıyafet üretmekle kalmayan, endüstriyel estetiği ve zamansız kaliteyi bir araya getiren bir tasarım atölyesidir.
                            İlhamımızı şehrin dinamik dokusundan, mühendislik harikası yapılardan ve kusursuz çalışan mekanizmalardan alıyoruz.
                            Her dikişte, her kumaş seçiminde bu dayanıklılık ve estetik anlayışını yansıtmayı amaçlıyoruz.
                        </p>
                    </section>

                    <div className="my-16 aspect-video bg-gray-200">
                        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1740&auto=format&fit=crop" alt="Üretim Atölyesi" className="w-full h-full object-cover grayscale opacity-90" />
                    </div>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-primary-text dark:text-dark-text mb-4">Üretim Süreçlerimiz</h2>
                        <p className="mb-4">
                            Ürünlerimizin üretim süreci, tasarım masasında atılan ilk çizgiden başlar. Kullanılan deri, pamuk ve kanvas gibi materyaller
                            titizlikle seçilir. Üretimde kullandığımız kumaşlar, uzun süreli kullanım düşünülerek yüksek gramajlı ve korozyona dayanıklı materyallerden elde edilmektedir.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Tasarım ve Prototip:</strong> Klasik formları modernize ederek kalıp testlerini tamamlıyoruz.</li>
                            <li><strong>Materyal Seçimi:</strong> Sadece sertifikalı kaynaklardan sağlanan hakiki deri ve işlenmiş pamuk kullanıyoruz.</li>
                            <li><strong>El İşçiliği Atölyesi:</strong> Ürünlerimizin önemli detayları, ustalarımız tarafından tamamen el işçiliğiyle tamamlanmaktadır.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
