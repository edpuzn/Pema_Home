# Derma-Detection
Görsel ve Tıbbi Verilere Dayalı Dermatolojik Hastalık Tespiti

## Proje Detayları
1. <b>Modüller</b>
    1. <b>Laboratuvar Test Verilerine Dayalı Teşhis</b>
    - Kan veya idrar değerleri gibi test sonuçlarını makine öğrenmesi modelleriyle analiz eder.
    - Karar ağaçları, rastgele ormanlar ve XGBoost gibi algoritmalar kullanılır.
    - Özellik önemini görüntülemek ve şeffaflık sağlamak için SHAP uygulanır.<br><br>

    2. <b>Dermatolojik Görüntü Analizi</b>
    - Cilt koşullarını tespit etmek için CNN tabanlı modeller (ResNet50, EfficientNet vb.) kullanılır.
    - Grad-CAM, görüntünün önemli bölgelerini vurgulamak için uygulanır.
    - Model eğitimi için HAM10000 ve ISIC gibi kamuya açık veri kümesi kullanılır.<br><br>

    3. <b>Hibrit Teşhis Sistemi</b>
    - Kullanıcıdan hem görüntü hem de ilgili laboratuvar sonuçları (PDF veya tablo formatında) alır.
    - Görüntü ve yapılandırılmış verileri ayrı ayrı işler ve son hastalık tahmini için birleştirir.
    - Gerçek dünya senaryolarını taklit ederek hem görsel hem de klinik verileri kullanarak teşhis yapar.<br><br><br>

2. <b>Teknolojiler ve Araçlar</b>

| Alan                       | Kütüphane / Araç                   |
|----------------------------|------------------------------------|
| Model Geliştirme           | scikit-learn, XGBoost, PyTorch     |
| Görsel Analiz              | CNN, ResNet, Grad-CAM              |
| Tablosal Veri İşleme       | pandas, SHAP, LightGBM             |
| PDF Ayrıştırm              | pdfplumber, PyMuPDF                |
| Açıklanabilirlik           | SHAP, Captum, Gemini               |
| Arayüz(Demo)               | Streamlit                          |


<br><br>3. <b>Kullanılacak Veri Kümesi</b>
> Data sets to be used for Dermatologic Images
1. [Skin Cancer Malignant vs Benign Dataset](https://www.kaggle.com/datasets/fanconic/skin-cancer-malignant-vs-benign)
2. [Skin Diseases Image Dataset](https://www.kaggle.com/datasets/ismailpromus/skin-diseases-image-dataset)
3. [Skin Disease Dataset](https://www.kaggle.com/datasets/pacificrm/skindiseasedataset/data)
4. [Skin Cancer MNIST: HAM10000](https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000)
5. [ISIC (International Skin Imaging Collaboration) Archive](https://www.isic-archive.com/collections)

> Data sets to be used for medical data
1. [Pima Indians Diabetes Database](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
2. [Blood Transfusion Service Center](https://archive.ics.uci.edu/dataset/176/blood+transfusion+service+center)

## <br><br>Örnek Kullanım Senaryosu
1. Hasta, kolundaki bir yara görüntüsünü ve kan testine ait bir PDF belgesini yükler.
2. Sistem, PDF'den glikoz seviyesi, CRP, WBC gibi verileri çıkarır.
3. ResNet ile görüntü analiz edilir, XGBoost ile tablo verisi ayrı ayrı değerlendirilir.
4. Sonuçlar birleştirilir: "Bu yara yüksek glikoz ile ilişkili olabilir → diyabetik yara olasılığı yüksek."
5. Gemini modeli, bu sonucu kullanıcıya açıklayıcı bir dil ile sunar.

