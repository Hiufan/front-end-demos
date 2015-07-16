# css3 flexbox

## 伸缩项目的语法 主要涵盖内容

### 前缀
> 目前只能又前缀来实现

### 开启Flexbox: 让一个元素开启Flexbox
> 通过display: flex 来让一个元素开启flex属性

### 主轴对齐方式: 指定伸缩项目研主轴对齐方式
> 主轴既盒子的排列方向, 而一般的排列方式主要有如下几种
- start
- center
- end 
- justify
- distribute

### 侧轴的对齐方式: 指定伸缩项目研侧轴对齐方式
> 主要的对齐方式
- start
- center 
- end
- baseline
- stretch

### 伸缩项目行对齐方式

### 单个伸缩项目对齐方式

### 伸缩项目显示顺序

### 伸缩性: 指定伸缩项目如何伸缩尺寸

### 伸缩流: 指定伸缩容器主轴的伸缩流方向
> 就是内部盒子是 水平左 水平右 竖直下 竖直上 对齐

### 换行: 指定伸缩项目是否沿着侧轴排列

==========================================================

## 旧版本的伸缩容器
> 指的是2009年前的版本(old)
**example at 8-1.html --> 8-26.html**

### 伸缩容器开启 display
- box
- inline-box

### 伸缩流方向 box-orient
- horizontal 水平
- vertical 垂直
- inline-axis
- block-axis

### 布局顺序 box-direction
- normal 正常顺序
- reverse 倒序

### 伸缩换行 box-lines *没有浏览器支持*
- single 只允许一行显示
- multiple 允许多行

### 主轴对齐 box-pack *根据布局轴来*
- start 
- end
- center
- justify 平均分配

### 侧轴对齐 box-align *根据侧局轴来*
- start 开始
- end 结束
- center 居中
- baseline 根据内容的中线
- stretch 伸缩项目填充整个容器

### 伸缩性 box-flex
> 对伸缩盒子的多余或者是溢出做处理 *想要平分 可以设置盒子为固定宽度*
- <number>

### 显示顺序 box-ordinal-group
> 用容器内部的内容 实现顺序的重拍
- <integer>

### 综合演示
=========================================================

## 混合版本Flexbox
> 2011年版本 `Hybrid` 
**example at 8-27.html ---> 8-51.html**

### display
- flexbox
- inline-flexbox

### 伸缩流方向 flex-direction
- row
- row-reverse
- column
- column-reverse

=========================================================

## 新版本的Flexbox模型的基本使用
> 现代版本 `modern`
**example at 8-52.html ---> 8-58.html**

