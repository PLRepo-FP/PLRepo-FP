# PLRepo-FP
程式語言期末報告  
## 爬蟲抓取花語  
[抓取目標網站](https://silviayellow.pixnet.net/blog/post/354111760)  
程式碼:  
```python
#request 
import csv
from bs4 import BeautifulSoup 
import requests
import re

url="https://silviayellow.pixnet.net/blog/post/354111760"
headers={
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
}

res = requests.get(url , headers=headers)
res.encoding = 'utf-8'
soup = BeautifulSoup(res.text, "html.parser")
# 抓取內容
contents = soup.find_all("td")
text = "\n".join([content.get_text() for content in contents])
cleaned_text = re.sub(r'[A-Za-z!@#$%^&*()_+{}[\]:;"\'<>,.?~\\/\-|=]', '', text)
cleaned_text=cleaned_text.replace('\n', '?')
cleaned_text=cleaned_text.replace('?花名?項目?花語?', '')
cleaned_text=cleaned_text.replace('?397?黃鬱金香：名聲?花語?', '')
cleaned_text = re.sub(r'花名.*$', '', cleaned_text)
data_list = cleaned_text.split('?')

# 移除可能的空字串
data_list = [item.strip() for item in data_list if item.strip()]
#新的二維陣列
new_list = [data_list[i:i+4] for i in range(0, len(data_list), 4)]

#存成csv
csv_file_path = 'flowers_data.csv'

# 使用 csv 模塊寫入 CSV 文件
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    csv_writer = csv.writer(csvfile)    
    # 寫入數據
    csv_writer.writerows(new_list)

print(f'CSV 文件已保存到 {csv_file_path}')
```
