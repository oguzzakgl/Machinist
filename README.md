# Machinist: Premium Engineered Apparel

Bu E-Ticaret şablonu ve API altyapısı, endüstriyel moda markaları için modern bir alışveriş deneyimi sunmak amacıyla **%100 Vibe Coding** (Yapay Zeka Destekli Kusursuz Kodlama) yöntemiyle, tam teşekküllü Full-Stack (Django + React + Tailwind v4) olarak inşa edilmiştir.

## Teknoloji Yığını
### Frontend (Kullanıcı Arayüzü)
- React 19 & Vite
- Tailwind CSS v4 (Aydınlık / Karanlık Mod Entegrasyonu)
- React Router DOM (Sayfa Yönlendirmeleri)
- Zustand (Global State ve Local Storage Kalıcılığı)
- Lucide React (Vektörel Modern İkonlar)

### Backend (Sunucu & API)
- Python 3.x & Django 5.x
- Django REST Framework (JSON Tabanlı API)
- MySQL (İlişkisel Veritabanı)

## Proje Yapısı ve Kurulum
Proje bağımsız iki ayakta (Backend ve Frontend) çalışmaktadır. 

1. **Frontend (İstemci) Kurulumu**
```bash
cd frontend
npm install
npm run dev
```

2. **Backend (Sunucu) Kurulumu**
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate   # Windows için
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

> **Not:** Ürün mock-up (sahte önizleme) verileri tamamen Frontend'teki State sistemlerine entegre edilmiştir. Kategoriye özel dinamik React Hook'larıyla anlık filtreleme yapılabilmektedir.
