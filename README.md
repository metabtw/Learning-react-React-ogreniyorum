# Learning-react / React-ogreniyorum

React öğrenmeye karar verdim ve BTK AKADEMİ nin REACT ile Web Programcılığı kursuna katıldım. 24 bölümden oluşan eğitim @[engindemirog](https://github.com/engindemirog) tarafından hazırlanmış.
Her gün 1 bölüm bitirecek şekilde ve sonrasında projeler ile kendimi geliştireceğim.Günlük gelişmeleri ve eğitim içerisinde öğrendiklerimi bu dosyanın altında paylaşacağım.

I decided to learn React and attended BTK ACADEMY's Web Programming with React course. The training consisting of 24 chapters was prepared by @[engindemirog](https://github.com/engindemirog).
I will improve myself by completing 1 chapter every day and then with projects. I will share the daily developments and what I have learned in the training under this file.

# Gün 1 / Day 1

İlk gün temel bilgiler ile başladık burada iki önemli kısım vardı 

  1. İnternet nasıl çalışır?
     
    1) Bağlantı: Bilgisayarlar, telefonlar, sunucular birbirine kablolarla veya kablosuz bağlanır.
    2) Veri Paketleri: Bir video izlediğinizde veya mesaj gönderdiğinizde, bu veri küçük paketlere bölünür. Örneğin, "Merhaba" yazdığınızda bu harfler 0 ve 1'lere dönüşür, paketler halinde iletilir.
    3) Yönlendirme: Paketler, yoldaki yönlendiriciler (router'lar) sayesinde en hızlı yoldan hedefe ulaşır. Tıpkı bir mektubun postaneler arasında aktarılması gibi.
    4) Protokoller: İnternette herkesin uyduğu kurallar vardır (TCP/IP). Örneğin, paketlerin nasıl gönderileceği, hataların nasıl düzeltileceği bu kurallarla belirlenir.
    5) Sunucu-İstemci: Tarayıcınız (istemci) bir web sitesine girdiğinizde, sunucuya (server) "Bana bu siteyi gönder" der. Sunucu da siteyi paketler halinde size yollar.

  2. Web sitesi nasıl çalışır ?

    -1.Adım: Tarayıcıya Yazmak
        Bir web sitesine girmek için tarayıcıya bir URL yazarsın (örneğin: www.google.com).
    -2.Adım: DNS Sorgusu
        Tarayıcı, bu URL’in hangi sunucuya ait olduğunu bulmak için DNS’e sorar.
    -3.Adım: Sunucuya İstek Gönderme
        Tarayıcı, bulduğu sunucuya "Bana bu siteyi gönder!" isteği yollar (HTTP/HTTPS protokolü ile).
    -4.Adım: Sunucu Cevap Verir
        Sunucu bu isteği alır ve web sitesinin dosyalarını (HTML, CSS, JavaScript) hazırlar.
    -5.Adım: Dosyalar Tarayıcıya Ulaşır
        Sunucu, bu dosyaları küçük veri paketleri halinde tarayıcıya gönderir.
    -6.Adım: Tarayıcı Görüntüler
        Tarayıcı, gelen HTML dosyasını okur, CSS ile stil verir, JavaScript ile etkileşim ekler.


# Day 2 / Gün 2 

 İkinci gün HTML 5 anlatıldı konu başlıkları :
   - HTML nedir
   - Temel HTML etiketleri
   - Linklerle çalışmak
   - Toblolarla çalışmak
   - Formatlama
   - Layout
   - Form Tagleri
   - HTML 5 ile gelen Form Tagleri 

( Bu kısımları bildiğim için açıklamaları uzun yazmıyorum )

# Day 3 / Gün 3

Üçüncü gün CSS3 anlatıldı konu başlıkları : 
  - CSS nedir
  - Temel CSS kullanımları
  - CSS özellekikleri ile çalışmak
  - Tablolarla Eventlerle çalışmak
  - İnputlarla çalışmak
  - Class yapısı
  - İd yapısı 

( Bu kısımları bildiğim için açıklamaları uzun yazmıyorum )


# Day 4 / Gün 4

Bootstrap Eğitimi:

-1 Bootstrap Nedir? - Neler Yapabiliriz?
Bootstrap, responsive (duyarlı) ve mobil öncelikli web siteleri tasarlamak için kullanılan popüler bir CSS ve JavaScript framework'üdür. Önceden hazırlanmış bileşenler (butonlar, formlar, navigasyon çubukları vb.) ve grid sistemi sayesinde hızlı ve tutarlı arayüzler oluşturabilirsiniz. Ayrıca, tarayıcı uyumluluğu sağlamak gibi teknik detaylarla uğraşmadan profesyonel tasarımlar yapabilirsiniz.

-2 Bootstrap Yaşam Döngüsünü Anlamak Ve Şablon Giydirmek
Bootstrap projeleri genellikle temel bir şablon (template) üzerine kurulur. Bu şablon, HTML yapısını, CSS ve JavaScript bağlantılarını içerir. "Şablon giydirmek" ise bu temel yapıyı özelleştirerek kendi tasarımınıza uyarlamak anlamına gelir. Bootstrap’in bileşenlerini kullanırken, class’ları ve stilleri değiştirerek projenize özgü bir görünüm elde edebilirsiniz.

-3 Container - Layout Ve Grid Mimarisi
Bootstrap’in grid sistemi, 12 sütunlu bir yapı üzerine kuruludur. container, row, ve col sınıfları ile responsive tasarımlar oluşturabilirsiniz. Örneğin, col-md-6 class’ı, orta boy ekranlarda iki eşit sütunlu bir düzen sağlar. Container’lar ise içerikleri hizalamak ve kenar boşluklarını yönetmek için kullanılır. Bu yapı, mobil uyumlu sayfalar için kritiktir.

-4 Tablolarla Çalışmak
Bootstrap, tabloları stilize etmek için table, table-striped, table-bordered gibi hazır sınıflar sunar. Bu sınıflarla tablolarınıza renk, kenarlık ve hover efektleri ekleyebilirsiniz. Ayrıca responsive tablolar için table-responsive class’ını kullanarak küçük ekranlarda kaydırılabilir tablolar oluşturabilirsiniz.

-5 Dropdown İle Çalışmak
Dropdown menüler, kullanıcı etkileşimi için önemli bileşenlerdir. Bootstrap’te dropdown, dropdown-toggle, ve dropdown-menu sınıfları ile açılır menüler oluşturabilirsiniz. JavaScript entegrasyonu sayesinde tıklama veya hover ile menüleri aktif hale getirebilirsiniz.

-6 Formlarla Çalışmak
Formlar, veri toplama süreçlerinin temelidir. Bootstrap, form elemanlarını düzenlemek için form-group, form-control gibi sınıflar sunar. Bu yapı, input’ları hizalamayı ve responsive formlar oluşturmayı kolaylaştırır. Ayrıca doğrulama (validation) stilleri ile kullanıcı dostu formlar tasarlayabilirsiniz.

-7 İnputlarla Çalışmak
Input alanları, metin girişleri, şifre alanları, tarih seçiciler gibi çeşitli tiplerde olabilir. Bootstrap’te input’ları form-control class’ı ile stilize edebilirsiniz. Boyutlandırma (form-control-lg veya form-control-sm) ve özel input grupları (input-group) ile daha etkileşimli alanlar oluşturabilirsiniz.

-8 Listelerle Çalışmak
Bootstrap, sıralı ve sırasız listeleri özelleştirmek için list-group sınıfını kullanır. list-group-item ile her bir liste öğesini stillendirebilir, renk veya hover efektleri ekleyebilirsiniz. Ayrıca, liste gruplarını bağlantılar (link) veya butonlarla birleştirerek interaktif menüler tasarlayabilirsiniz.

// UZUN BİR ARADAN SONRA DEVAM

# GÜN 5

JavaScript ES6+ 
Temel bilgim olduğu için hızlı ilerlediğim bir ders oldu.

-Temel operasyonlar ve veri tiplerle çalışmak 1:
Web kısmındaki f12 ile console kısmında temel operatörleri anlattı 

-Temel operasyonlar ve veri tiplerle çalışmak 2:
Web kısmındaki f12 ile console kısmında "var" keyword'ü nasıl kullanıcağımızı anlattı. Kullanıcıdan nasıl değer alacağımızı da anlattı.Tip dönüşümünü anlattı.

-Şart Bloklarına Giriş 1-2 :
"if-else-else if" kullanımını anlattı."alert" syntax'ını anlattı.'Ve , Veya' ile şart bloklarını anlattı.

-Fonksiyonlarla Çalışmak : 
Foknsiyon nasıl yazılır nasıl çağrılır return ifadesini parametreleri anlattı.Sürekli aynı komutları yazmamak için önemli

-Diziler : 
Dizinin tanımını anlattı ne için kullanıldığını anlattı. nasıl tanımlanacağını ve nasıl kullanılacağını anlattı. dizi içine fonksiyon tanımlamayı anlattı. 

-Dizi Fonksiyonlarıyla çalışmak :
  -"pop" son elemanı almayı anlattı.
  -"shift" diziyi sola doğru kaydırır
  -"push" diziye ekleme
  -"concat" iki diziyi birleştiriyor
  -"sort" son elemanı başta yazar
  -"length" dizi uzunluğu

-Nesnelerle çalışmak : 
Nesnenin nasıl tanımlandığını ve nasıl kullanılacağını anlattı.içinde diziyi nasıl tutacağımızı anlattı.fonksiyonu nasıl tutarız onu anlattı.



