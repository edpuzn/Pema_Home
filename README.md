# Derma-Detection
Dermatologic Disease Detection Based on Visual and Medical Data

## Project Details
1. <b>Moduls</b>
    1. <b>Diagnosis Based on Lab Test Data</b>
    - Analyzes test results such as blood or urine values using machine learning models.
    - Uses algorithms like decision trees, random forests, and XGBoost.
    - SHAP is applied to visualize feature importance and provide transparency.<br><br>

    2. <b>Dermatological Image Analysis</b>
    - Employs CNN-based models (e.g., ResNet50, EfficientNet) to detect skin conditions from images.
    - Grad-CAM is used to highlight important regions in the image.
    - Public datasets like HAM10000 and ISIC are used for model training.<br><br>

    3. <b>Hybrid Diagnosis System</b>
    - Accepts both an image and corresponding lab results (in PDF or tabular format) from the user.
    - Processes image and structured data separately and combines them for final disease prediction.
    - Mimics real-world scenarios where both visual and clinical data are used for diagnosis.<br><br><br>

2. <b>Technologies and Tools</b>

| Area                       | Libraries / Tools                  |
|----------------------------|------------------------------------|
| Model Development          | scikit-learn, XGBoost, PyTorch     |
| Image Analysis             | CNN, ResNet, Grad-CAM              |
| Tabular Data Processing    | pandas, SHAP, LightGBM             |
| PDF Parsing                | pdfplumber, PyMuPDF                |
| Explainability             | SHAP, Captum, Gemini               |
| Interface (Demo)           | Streamlit                          |

<br><br>3. <b>Data sets for this project</b>
> Data sets to be used for Dermatologic Images
1. [Skin Cancer Malignant vs Benign Dataset](https://www.kaggle.com/datasets/fanconic/skin-cancer-malignant-vs-benign)
2. [Skin Diseases Image Dataset](https://www.kaggle.com/datasets/ismailpromus/skin-diseases-image-dataset)
3. [Skin Disease Dataset](https://www.kaggle.com/datasets/pacificrm/skindiseasedataset/data)
4. [Skin Cancer MNIST: HAM10000](https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000)
5. [ISIC (International Skin Imaging Collaboration) Archive](https://www.isic-archive.com/collections)

> Data sets to be used for medical data
1. [Pima Indians Diabetes Database](https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database)
2. [Blood Transfusion Service Center](https://archive.ics.uci.edu/dataset/176/blood+transfusion+service+center)

## <br><br>Example Use Case
1. The patient uploads an image of a wound on his/her arm and adds a PDF of a blood test.
2. The system extracts data from the PDF (e.g. glucose level, CRP, WBC, etc.).
3. With Image ResNet, the analysis data is analyzed separately with XGBoost.
4. The results are combined: “This wound may be associated with high glucose → high probability of diabetic wound.”
5. The Gemini model presents this result to the user in an explanatory language.