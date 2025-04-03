
"""HAM10000 İlk Veri Analizi - Edip"""

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


df = pd.read_csv("HAM10000_metadata.csv")


print("⏩ İlk 5 Kayıt:")
print(df.head())


print("\n📊 Temel İstatistikler:")
print(df.describe())


print("\n❌ Eksik Veri Sayısı:")
print(df.isnull().sum())



plt.figure(figsize=(10, 5))
sns.countplot(x='dx', data=df, order=df['dx'].value_counts().index)
plt.title("Lezyon Türleri Dağılımı (dx)")
plt.xlabel("Lezyon Türü")
plt.ylabel("Adet")
plt.show()


plt.figure(figsize=(10, 5))
df['age'].hist(bins=30, edgecolor='black')
plt.title("Hasta Yaş Dağılımı")
plt.xlabel("Yaş")
plt.ylabel("Hasta Sayısı")
plt.show()


plt.figure(figsize=(6, 4))
df['sex'].value_counts().plot(kind='pie', autopct='%1.1f%%')
plt.title("Cinsiyet Dağılımı")
plt.ylabel("")
plt.show()