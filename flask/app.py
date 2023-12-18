from flask import Flask, render_template, request
import csv

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/search', methods=['POST'])
def search():
    search_text = request.form.get('search_text', '')
    results = perform_search(search_text)
    return render_template('index.html', results=results)

import csv

def perform_search(search_text):
    results = []

    # 打開 CSV 文件，使用 utf-8-sig 作為文件編碼
    with open('花語.csv', 'r', encoding='utf-8-sig') as file:
        # 使用 DictReader，並指定 delimiter
        csv_reader = csv.DictReader(file, delimiter=',')

        # 去除 BOM
        headers = [header.lstrip('\ufeff') for header in csv_reader.fieldnames]

        # 遍歷 CSV 文件的每一行
        for row in csv_reader:
            # 去除每一行的欄位值中的 BOM
            row = {key.lstrip('\ufeff'): value for key, value in row.items()}

            # 檢查每個欄位值是否包含搜尋文本
            if any(search_text.lower() in value.lower() for value in row.values()):
                # 將符合條件的行添加到結果列表中
                results.append({'花名': row['花名'], '花語': row['花語'], '花語索引': row['花語索引']})

    return results

if __name__ == '__main__':
    app.run(debug=True)
