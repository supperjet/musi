### 音乐可视化

本项目结合了nodejs， webaudio和canvas技术对音频数据实现可视化操作

### nodejs部分
nodejs部分主要采用fs模块对音频文件进行读取

### webAudio部分
通过webAudio API对音频数据经行解析，获取不同采样值的频域数据

### canvas部分
对采样获取到的数据，进行图形量化，这里提供了柱状图，与球形图，后期会加入webGL支持

###安装
```
npm install

```

### 运行
```
node bin/www

```