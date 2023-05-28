# -*- coding: utf-8 -*-
# @Time    :2023/5/29 5:36
# @Author  :lzh
# @File    : compress.py
# @Software: PyCharm
import os
from PIL import Image

# 获取当前路径
current_path = os.getcwd()

# 遍历当前路径下所有文件
for filename in os.listdir(current_path):
    # 检查文件是否为图片（我们这里只检查.jpg和.png格式的图片，你可以根据需要添加更多的图片格式）
    if filename.endswith(".jpg") or filename.endswith(".png"):
        # 获取图片的完整路径
        img_path = os.path.join(current_path, filename)
        # 打开并获取图片
        with Image.open(img_path) as img:
            # 获取图片的宽度和高度
            width, height = img.size
            # 缩小到原来的1/4
            new_width, new_height = width // 2, height // 2
            # 重新调整图片大小
            resized_img = img.resize((new_width, new_height))
            # 覆盖原图
            resized_img.save(img_path)
